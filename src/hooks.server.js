import {createServerClient} from '@supabase/ssr'
import {PUBLIC_SUPABASE_URL} from '$env/static/public'
import {SECRET_SUPABASE_KEY} from '$env/static/private'

export const handle = async ({event, resolve}) => {
    if (!isProtectedPath(event.url.pathname)) {
        return resolve(event, {
            filterSerializedResponseHeaders(name) {
                return name === 'content-range'
            },
        })
    }

    event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, SECRET_SUPABASE_KEY, {
        cookies: {
            get: (key) => event.cookies.get(key),
            set: (key, value, options) => {
                event.cookies.set(key, value, options)
            },
            remove: (key, options) => {
                event.cookies.delete(key, options)
            },
        },
    })

    event.locals.getSession = async () => {
        const {data: {session}} = await event.locals.supabase.auth.getSession()
        return session
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}

const isProtectedPath = (path) => path.startsWith('/secret/') || path.startsWith('/api/auth/')
