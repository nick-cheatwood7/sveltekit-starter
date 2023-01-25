<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-3xl text-white font-bold underline">About page</h1>
<p class="text-gray-400 mt-2">{data.message}</p>
