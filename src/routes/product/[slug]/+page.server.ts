import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params, fetch }) => {
	var myHeaders = new Headers()
	myHeaders.append('Accept', 'application/vnd.api+json')
	myHeaders.append('Content-Type', 'application/vnd.api+json')
	myHeaders.append('Authorization', env.AUTH_HEADER)
	var requestOptions = {
		method: 'GET',
		headers: myHeaders
	}
	const call = await fetch(`https://api.lemonsqueezy.com/v1/products/${params.slug}`, requestOptions)
	const resp = await call.json()
	return resp
}
