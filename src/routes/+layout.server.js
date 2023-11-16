export const load = async ({ locals: { getSession } }) => {
	const session = await getSession()

	return {
		isLoggedIn: session !== null
	}
}
