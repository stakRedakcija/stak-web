export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	return await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const {metadata} = await resolver()
			const postPath = path.slice(11, -3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)
}

export const isDateBetween = (startDate, endDate) => {
	const currentDate = new Date()
	return startDate <= currentDate && currentDate <= endDate
}

export const getRandomInt = (min, max) =>
	(Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) % (max - min + 1)) + min
