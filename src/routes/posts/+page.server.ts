import db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	console.log('⚡️ Rendering on server...');
	return {
		posts: await db.post.findMany()
	};
}) satisfies PageServerLoad;
