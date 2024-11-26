import {unlinkSync} from 'node:fs'

const destinationJSONPath = `${import.meta.dir}/src/routes/clanovi.json`
const photoPath = `${import.meta.dir}/static/clanovi/`

const main = async () => {
	await checkArgs()
	await checkDestinationJSON()

	const newJSON = processGoogleSheetHTML(await Bun.file(process.argv[2]).text())
	const oldJSON = await Bun.file(destinationJSONPath).json()
	const key = 'nameSlug'

	const updatedJSON = updateJSON(
		oldJSON,
		newJSON,
		key,
		(person) => console.info(`[ INFO ] Add:\t${person.name}`),
		(person) => {
			unlinkSync(`${photoPath + person.nameSlug}.jpg`)
			unlinkSync(`${photoPath + person.nameSlug}.webp`)
			console.warn(`[ WARN ] Del:\t${person.name}`)
		}
	).sort((a, b) => a.rank !== b.rank ? a.rank - b.rank : a.lastName.localeCompare(b.lastName)).map(({
		lastName,
		...other
	}) => other)

	if (await Bun.write(destinationJSONPath, JSON.stringify(updatedJSON)) > 0) {
		console.info(`[ INFO ] Successfully updated ${destinationJSONPath}`)
	} else {
		console.error(`[ ERROR ] Failed to update ${destinationJSONPath}!`)
	}
}

const checkArgs = async () => {
	if (process.argv.length !== 3) {
		console.info('[ INFO ] Usage: bun updateMembers.js <popis.html>')
		process.exit(1)
	}

	if (!(await fileExists(process.argv[2]))) {
		console.error(`[ ERROR ] File ${process.argv[2]} not found.`)
		process.exit(1)
	}

	if (!process.argv[2].endsWith('.html')) {
		console.error(`[ ERROR ] Only HTML files are supported.`)
		process.exit(1)
	}
}

const checkDestinationJSON = async () => {
	if (!(await fileExists(destinationJSONPath))) {
		console.error(`[ ERROR ] Destination JSON file ${destinationJSONPath} not found.`)
		process.exit(1)
	}
}

const updateJSON = (oldJSON, newJSON, key, propertyConsumer, deletePredicate) =>
	oldJSON
		// updates existing records
		.map((oldObj) => ({
			...oldObj,
			...(newJSON.find((newObj) => newObj[key] === oldObj[key]))
		}))
		// adds new records
		.concat(newJSON
			.filter((it) => !oldJSON.some((obj) => obj[key] === it[key]))
			.map((it) => ({
				...oldJSON[Math.floor(Math.random() * oldJSON.length)],
				...it,
				...((propertyConsumer && propertyConsumer(it)) ?? {})
			}))
		)
		// removes deprecated records
		.filter((it) => {
			if (newJSON.some((obj) => obj[key] === it[key])) {
				return true
			}
			if (deletePredicate) deletePredicate(it)
			return false
		})

const processGoogleSheetHTML = (htmlDoc) => {
	const tableBody = htmlDoc.match(/<tbody.*><\/tbody>/s)[0]

	const rowMatcher = /<tr\b[^>]*>(.*?)<\/tr>/g
	const tdMatcher = /<td\b[^>]*>(.*?)<\/td>/g

	// parses HTML table body rows to array of arrays - each array contains row values for each person
	const gSheetData = tableBody
		.match(rowMatcher)
		.map((row) => {
			const columns = [...row.matchAll(tdMatcher)].map((it) => it[1])
			return columns[0] ? columns : null
		})
		.filter(Boolean)

	const croatiaRx = (match) => ({'š': 's', 'đ': 'd', 'ž': 'z', 'č': 'c', 'ć': 'c'})[match]
	// maps arrays to person objects; first array is header (JSON keys)
	const keys = gSheetData.shift()
	return gSheetData
		.map((person) =>
			person.reduce((acc, value, index) => {
				acc[keys[index]] = value
				return acc
			}, {}))
		// maps Google Sheet keys to our keys
		.map((person) => {
			const name = `${person['IME']} ${person['PREZIME']}`
			return {
				name,
				nameSlug: slugify(name).replace(/[šđžčć]/gi, croatiaRx),
				lastName: person['PREZIME'],
				rank: parseInt(person['RANK']),
				email: person['ZA DISCORD'] ?? '',
				role: person['ULOGE'],
				bio: person['KRATKA BIOGRAFIJA']
					.trim()
					.replaceAll('<span style=\"font-style:italic;\">', '<i>')
					.replaceAll('</span>', '</i>')
			}
		})
		// removes persons without bio
		.filter((person) => person.bio)
}

const fileExists = async (path) => await Bun.file(path).exists()

const slugify = (str) => str.toLowerCase().split(' ').join('-')

await main()

