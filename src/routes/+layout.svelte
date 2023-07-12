<script lang="ts">
	import '@/src/app.css'
	import { navigating } from '$app/stores'

	const squeezeLemons = () => {
		if (typeof document === 'undefined') return
		if (window.createLemonSqueezy) {
			window.createLemonSqueezy()
			document.querySelectorAll('.lemonsqueezy-button').forEach((i) => {
				i.classList.remove('pointer-events-none')
			})
			window.LemonSqueezy.Setup({
				eventHandler: (event) => {
					console.log(event)
				}
			})
		}
	}

	const prepareLemons = (navigating?: any) => {
		if (typeof document === 'undefined') return
		document.querySelectorAll('.lemonsqueezy-button').forEach((i) => {
			i.classList.add('pointer-events-none')
		})
		console.log('Kicked In...')
		const ifLemonsPrepared = document.querySelector('[src*="assets.lemonsqueezy.com/lemon.js"]')
		console.log({ ifLemonsPrepared })
		if (ifLemonsPrepared) {
			squeezeLemons()
		} else {
			var script = document.createElement('script')
			script.onload = () => {
				setTimeout(squeezeLemons, 100)
			}
			script.src = 'https://assets.lemonsqueezy.com/lemon.js'
			document.head.appendChild(script)
		}
	}

	navigating.subscribe(() => {
		prepareLemons()
	})
</script>

<slot />
