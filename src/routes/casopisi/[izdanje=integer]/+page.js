import casopisi from '../casopisi.json'
import { error, redirect } from '@sveltejs/kit'

export const load = async ({ params }) => {
	const izdanje = parseInt(params.izdanje)

	if (izdanje > 0) {
		const casopis = casopisi.find((it) => it.title === `St@k ${ izdanje }`)
		if (!casopis) throw error(404)

		if (casopis.url.startsWith('https://')) {
			throw redirect(303, casopis.url)
		}
		return { izdanje }
	}

	throw error(404)
}
