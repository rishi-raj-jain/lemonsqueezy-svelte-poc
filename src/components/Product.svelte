<script lang="ts">
	import H4 from './H4.svelte'

	export let name: string
	export let id: string | number
	export let large_thumb_url: string
</script>

<a href={`/product/${id}`} class="flex flex-col space-y-4">
	<img alt={name} class="w-full rounded border" src={large_thumb_url} />
	<H4 text={name} />
</a>
