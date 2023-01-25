<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col bg-gray-800">
	<nav
		class="w-full bg-gray-700 shadow-md p-2 items-center justify-center flex space-x-4 text-white"
	>
		<a href="/" class="hover:cursor-pointer hover:bg-gray-600 rounded-md p-2">Home</a>
		<a href="/about" class="hover:cursor-pointer hover:bg-gray-600 rounded-md p-2">About</a>
		<a href="/posts" class="hover:cursor-pointer hover:bg-gray-600 rounded-md p-2">Posts</a>
	</nav>

	<slot />
</div>
