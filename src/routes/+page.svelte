<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
	
	import H1 from '@/src/components/H1.svelte'
	import Sep from '@/src/components/Sep.svelte'
	import Product from '@/src/components/Product.svelte'
</script>

<div class="mt-8 flex w-full max-w-2xl flex-col space-y-8">
	<H1 text="Products" />
	<Sep />
	{#each data.data as i}
		<Product {...i.attributes} id={i.id} />
	{/each}
</div>
