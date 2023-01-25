import type { RequestHandler } from './$types';

export const GET = (async ({ url }) => {
	console.log('Handling request at:', url.pathname);
	const obj = { message: 'Hello World!' };
	return new Response(JSON.stringify(obj));
}) satisfies RequestHandler;
