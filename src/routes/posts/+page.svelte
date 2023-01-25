<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-3xl text-white font-bold underline">Posts page</h1>

{#if data.posts.length === 0}
	<!-- Placeholder -->
	<p class="text-gray-400 mt-2">No posts found</p>
{:else}
	<!-- Table -->
	<table class="table-auto mt-2 border">
		<thead class="text-gray-400">
			<!-- Column Headers -->
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Content</th>
				<th>Created At</th>
			</tr>
		</thead>
		<!-- Table Body -->
		<tbody class="text-white">
			{#each data.posts as post}
				<tr>
					<td>{post.id}</td>
					<td>{post.title}</td>
					<td>{post.content?.toString()}</td>
					<td>{post.createdAt}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
