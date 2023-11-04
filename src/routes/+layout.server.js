export const load = async ({url: {pathname: currentRoute}, locals: {getSession}}) => {
    const session = await getSession()

    return {
        isLoggedIn: session !== null
    }
}
