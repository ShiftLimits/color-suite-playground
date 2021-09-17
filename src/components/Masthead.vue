<template>
	<header class="h-2 bg-neutral-850 flex justify-center">
		<div class="flex-grow flex justify-end">
			<div class="w-full max-w-3 bg-gradient-to-r from-transparent to-neutral-900"></div>
		</div>
		<div class="w-full max-w-lg bg-gradient-to-b from-neutral-800 to-neutral-850 flex">
			<!-- Logo -->
			<router-link to="/" class="p-1/2 pl-1-1/2 bg-gradient-to-br from-primary-400 to-primary-800 hover:from-primary-350 hover:to-primary-750">
				<div class="font-black text-2xl">Wordmark</div>
			</router-link>

			<!-- Center -->
			<div class="flex-1 flex">
				<!-- Menu -->
				<div class="flex divide-x-default divide-neutral-850 border-l-default border-neutral-850">
					<masthead-link to="/">Home</masthead-link>
					<masthead-link to="/colors">Colors</masthead-link>
				</div>

				<!-- Design Element -->
				<div class="h-full">
					<svg viewBox="0 0 1 2" preserveAspectRatio="none" class="h-full w-1">
						<linearGradient id="grad" x1="0" x2="0" y1="0" y2="0.75">
							<stop offset="0%" stop-color="currentColor" class="text-primary-700" />
							<stop offset="100%" stop-color="currentColor" class="text-primary-750" />
						</linearGradient>
						<path d="M0,0 L0,2 L1,2 L1,1.75 L0.25,1 L0.25,0 Z" class="fill-primary-750" style="fill: url(#grad)" />
					</svg>
				</div>

				<!-- Whitespace -->
				<div class="flex-1 border-b-1/4 border-primary-750"></div>
			</div>

			<!-- Design Element -->
			<div class="h-full">
				<svg viewBox="0 0 1 2" preserveAspectRatio="none" class="h-full w-1">
					<path d="M1,0 L1,2 L0,2 L0,1.75 Z" class="fill-primary-750" />
				</svg>
			</div>

			<!-- User Menu -->
			<div class="min-w-3 p-1/4 bg-gradient-to-r from-primary-750 to-primary-800 flex space-x-1/4">
				<div class="flex-1 flex flex-col">
					<div class="flex-1 flex justify-end space-x-1/8">
						<button class="group"><svg-icon name="notifications" class="h-1 fill-neutral-300 group-hover:fill-neutral-50" /></button>
						<button class="group"><svg-icon name="mail" class="h-1 fill-neutral-300 group-hover:fill-neutral-50" /></button>
					</div>
				</div>
				<div class="h-full"><svg viewBox="0 0 1 1" class="h-full w-1-1/2 rounded-1/4 bg-primary-650" /></div>
			</div>
		</div>
		<div class="flex-grow flex">
			<div class="w-full max-w-3 bg-gradient-to-l from-transparent to-neutral-900"></div>
		</div>
	</header>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import MastheadLink from './MastheadLink.vue'

	export default defineComponent({
		components: { MastheadLink },
		setup() {
			
		}
	})
</script>

