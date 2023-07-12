<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData

	import H1 from '@/src/components/H1.svelte'
	import Sep from '@/src/components/Sep.svelte'
	import Button from '@/src/components/Button.svelte'
</script>

<div class="mt-8 flex w-full max-w-2xl flex-col space-y-8">
	<a class="text-sm font-light text-gray-400 hover:underline" href="/"> &larr; Back To Products</a>
	<H1 text={data.data.attributes.name} />
	<Sep />
	<a class="lemonsqueezy-button" href={data.data.attributes.buy_now_url}>
		<Button text="Buy" />
	</a>
	<img alt={data.data.attributes.name} class="w-full rounded border" src={data.data.attributes.large_thumb_url} />
	{@html data.data.attributes.description}
</div>
