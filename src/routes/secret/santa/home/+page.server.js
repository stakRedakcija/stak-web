import {redirect} from '@sveltejs/kit'
import {PUBLIC_SANTA_START, PUBLIC_SANTA_END} from '$env/static/public'
import members from '../../../clanovi.json'

const validEmails = members.map((it) => it.email).filter((it) => it)
const santaStartDate = new Date(PUBLIC_SANTA_START)
const santaEndDate = new Date(PUBLIC_SANTA_END)

export const load = async ({url, locals: {supabase, getSession}}) => {
    const session = await getSession()
    const response = {
        error: '',
        user: {},
        event: {
            startDate: santaStartDate,
            endDate: santaEndDate,
            isDrawingTime: isDateBetween(santaStartDate, santaEndDate)
        }
    }

    if (isSessionAvailable(session)) {
        if (!isStakMember(session.user.email)) {
            await deleteUser(supabase, session.user)
            response.error = 'You\'re not on Santa\'s list... ):'
            return response
        }
    } else {
        await signInWithDiscord(supabase, url)
    }

    response.user = getUserFromSession(session)
    return response
}

const isDateBetween = (startDate, endDate) => {
    const currentDate = new Date()
    return startDate <= currentDate && currentDate <= endDate
}

const isSessionAvailable = (session) => session !== null

const isStakMember = (email) => validEmails.includes(email)

const deleteUser = async (supabase, user) => {
    await supabase.auth.signOut()
    await supabase.auth.admin.deleteUser(user.id)
}

const signInWithDiscord = async (supabase, url) => {
    const {data} = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
            scopes: 'identify',
            redirectTo: `${url.protocol}//${url.host}/api/auth/callback?next=/secret/santa/home`,
        }
    })

    throw redirect(303, data.url)
}

const getUserFromSession = (session) => {
    const {
        email,
        user_metadata: {
            picture: src,
            full_name: username,
            custom_claims: {global_name: fullName}
        }
    } = session.user

    return {email, src, fullName, username}
}
