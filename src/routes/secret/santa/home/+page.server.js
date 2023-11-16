import { redirect } from '@sveltejs/kit'
import { PUBLIC_SANTA_START, PUBLIC_SANTA_END } from '$env/static/public'
import members from '../../../clanovi.json'
import { isDateBetween } from '$lib/utils/index.js'

const validEmails = members.map((it) => it.email).filter((it) => it)
const santaStartDate = new Date(PUBLIC_SANTA_START)
const santaEndDate = new Date(PUBLIC_SANTA_END)

export const load = async ({ url, locals: { supabase, getSession } }) => {
	const session = await getSession()
	const response = {
		error: '',
		event: {
			startDate: santaStartDate,
			endDate: santaEndDate,
			isDrawingTime: isDateBetween(santaStartDate, santaEndDate)
		},
		user: {},
		elf: {}
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

	response.user = extractUserInfo(session.user)

	if (response.event.isDrawingTime) {
		response.elf = await getElfForUser(supabase, session.user.id)
	}

	return response
}

const isSessionAvailable = (session) => session !== null

const isStakMember = (email) => validEmails.includes(email)

const deleteUser = async (supabase, user) => {
	await supabase.auth.signOut()
	await supabase.auth.admin.deleteUser(user.id)
}

const signInWithDiscord = async (supabase, url) => {
	const { data } = await supabase.auth.signInWithOAuth({
		provider: 'discord',
		options: {
			scopes: 'identify',
			redirectTo: `${url.protocol}//${url.host}/api/auth/callback?next=/secret/santa/home`
		}
	})

	throw redirect(303, data.url)
}

const extractUserInfo = (user) => {
	const { email, user_metadata, raw_user_meta_data } = user
	const {
		picture: src,
		full_name: username,
		custom_claims: { global_name: fullName }
	} = user_metadata ?? raw_user_meta_data

	return { email, src, fullName, username }
}

const getElfForUser = async (supabase, userId) => {
	const { data, error } = await supabase.rpc('get_elf', { userid: userId })
	if (error) return {}

	const { elf_id, shown: isShown } = data
	if (!elf_id) return {}

	const elf = await supabase.rpc('get_user', { userid: elf_id })

	return {
		...extractUserInfo(elf.data),
		isShown
	}
}
