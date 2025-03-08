<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main
	class="container mx-auto max-w-3xl prose prose-xl prose-a:link-secondary prose-h1:text-secondary prose-h2:text-secondary"
>
	{@render children()}
</main>
