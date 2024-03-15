import casopisi from '../../casopisi.json'
import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	const izdanje = parseInt(params.izdanje)

	if (izdanje > 0 && casopisi.find((it) => it.id === izdanje)) {
		return { izdanje }
	}

	throw error(404)
}
