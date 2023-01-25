import type { PageLoad } from './$types';

export const load = (() => {
	console.log('⚡️ Rendering on client...');
	return {
		message: 'Hello from SvelteKit!'
	};
}) satisfies PageLoad;
