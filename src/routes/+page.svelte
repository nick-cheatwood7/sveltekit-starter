<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="flex flex-1 flex-col items-center justify-center">
	<h1 class="text-3xl font-bold underline text-white">Welcome to SvelteKit</h1>
	<p class="text-gray-400 mt-2">
		Visit <a
			class="text-pink-500 hover:cursor-pointer hover:text-pink-600"
			href="https://kit.svelte.dev">kit.svelte.dev</a
		> to read the documentation.
	</p>
	<p class="mt-2 text-gray-400">Message from API: {data.message}</p>
</main>
