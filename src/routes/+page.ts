import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/hello');
	const data = await res.json();
	return {
		message: data.message
	};
}) satisfies PageLoad;
