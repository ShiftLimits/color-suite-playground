<template>
	<centered-section>
		<!-- Hero Feature -->
		<div class="h-1/3-screen bg-neutral-900"> </div>

		<!-- Primary Ribbon -->
		<div class="h-2 bg-gradient-to-br from-primary-700 to-primary-900 flex items-center md:pr-16">
			<div class="p-1/2 flex-1"><h1 class="font-black text-xl">Community Feed</h1></div>
			<div class="p-1/2">All</div>
		</div>

		<!-- Content -->
		<div class="flex flex-col p-1 space-y-1 md:space-y-0 md:space-x-1 md:flex-row">
			<!-- Left -->
			<div class="flex-1 flex flex-col space-y-1">
				<!-- Post List -->
				<div v-for="post in posts" :key="post.id" class="p-1/2 pb-1 rounded-1/4 bg-neutral-800 shadow-md relative">
					<svg viewBox="0 0 1 1" class="h-1 absolute -left-1/8 -top-1/8">
						<path d="M0,0.5 A0.5,0.5,0,0,1,0.5,0 L1,0 L1,0.125 L0.75,0.125 C0.6,0.125 0.125,0.6 0.125,0.75 L0.125,1 L0,1 Z" class="fill-primary-500" />
					</svg>
					<svg viewBox="0 0 1 1" class="h-1 absolute -right-1/8 -top-1/8">
						<path d="M1,0.5 A0.5,0.5,0,0,0,0.5,0 L0,0 L0,0.125 L0.25,0.125 C0.4,0.125 0.875,0.6 0.875,0.75 L0.875,1 L1,1 Z" class="fill-primary-500" />
					</svg>
					<div class="flex flex-col space-y-1/2">
						<div class="flex space-x-1/2 pb-1/2 border-b-default border-neutral-900">
							<div><svg viewBox="0 0 1 1" class="h-1-1/2 bg-gradient-to-br from-secondary-700 to-secondary-900 rounded-1/4" /></div>
							<div class="flex-1 flex items-center">
								<span class="font-medium text-xl">{{ post.author }}</span>
							</div>
						</div>
					</div>
					<div>
						<p>{{ post.text }}</p>
					</div>
					<div class="absolute bottom-0 inset-x-0 md:inset-x-auto md:right-2 transform translate-y-25% flex justify-center text-xs">
						<div class="bg-primary-500 text-neutral-100 rounded-1/4 overflow-hidden flex">
							<button class="flex items-center space-x-1/8 p-1/4 hover:bg-neutral-300/30">
								<svg-icon name="heart" class="h-3/4 fill-current" />
								<div class="px-1/4 flex items-center justify-center rounded-1/8 bg-primary-700">{{ post.likes }}</div>
							</button>
							<button class="flex items-center space-x-1/4 p-1/4 border-l-default border-primary-600 hover:bg-neutral-300/30">
								<svg-icon name="comments" class="h-3/4 fill-current" />
								<div class="font-medium">Comments</div>
								<div class="px-1/4 flex items-center justify-center rounded-1/8 bg-primary-700">{{ post.comments }}</div>
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Right -->
			<aside class="w-full md:max-w-14 space-y-1">
				<!-- Feature -->
				<section class="md:-mt-5 h-5-1/2 p-1/2 bg-gradient-to-br from-neutral-800 to-neutral-850 rounded-1/2 shadow-md flex space-x-1/2">
					<div class="h-full"><svg viewBox="0 0 1 1" class="h-full bg-gradient-to-br from-secondary-800/60 to-secondary-900/60 rounded-1/4" /></div>
					<div class="flex-1 flex flex-col space-y-1/4 min-w-0">
						<div class="pb-1/4 border-b-1/8 border-secondary-600"><h2 class="text-xl font-bold text-neutral-150">Feature</h2></div>
						<div class="flex-1 flex flex-col">
							<div class="flex-1">
								<p class="overflow-ellipsis overflow-hidden whitespace-nowrap text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis pulvinar mi ut imperdiet. Curabitur pretium dapibus est, non dignissim lacus interdum dapibus.</p>
							</div>
							<secondary-button class="self-end">Read More</secondary-button>
						</div>
						<div></div>
					</div>
				</section>

				<!-- Recommended -->
				<section class="">
					<div class="p-1/2 bg-gradient-to-r from-primary-800 to-primary-850 rounded-t-1/2"><h2 class="text-xl font-bold text-neutral-150">Recommended</h2></div>
					<div class="p-1/2 bg-gradient-to-br from-neutral-800 to-neutral-850 rounded-b-1/2 shadow-md flex space-x-1/2">
						<div class="flex-1 flex flex-col space-y-1/2 min-w-0">
							<div class="flex space-x-1/2 min-w-0">
								<div><svg viewBox="0 0 1 1" class="h-2 bg-gradient-to-br from-primary-850 to-primary-900 rounded-1/4" /></div>
								<div class="flex-1 flex flex-col min-w-0">
									<h2 class="text-lg leading-1 font-bold text-neutral-150">Some Title</h2>
									<p class="text-sm leading-1 overflow-ellipsis overflow-hidden whitespace-nowrap text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis pulvinar mi ut imperdiet. Curabitur pretium dapibus est, non dignissim lacus interdum dapibus.</p>
								</div>
							</div>
							<div class="flex space-x-1/2 min-w-0">
								<div><svg viewBox="0 0 1 1" class="h-2 bg-gradient-to-br from-primary-850 to-primary-900 rounded-1/4" /></div>
								<div class="flex-1 flex flex-col min-w-0">
									<h2 class="text-lg leading-1 font-bold text-neutral-150">Some Title</h2>
									<p class="text-sm leading-1 overflow-ellipsis overflow-hidden whitespace-nowrap text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis pulvinar mi ut imperdiet. Curabitur pretium dapibus est, non dignissim lacus interdum dapibus.</p>
								</div>
							</div>
							<div class="flex space-x-1/2 min-w-0">
								<div><svg viewBox="0 0 1 1" class="h-2 bg-gradient-to-br from-primary-850 to-primary-900 rounded-1/4" /></div>
								<div class="flex-1 flex flex-col min-w-0">
									<h2 class="text-lg leading-1 font-bold text-neutral-150">Some Title</h2>
									<p class="text-sm leading-1 overflow-ellipsis overflow-hidden whitespace-nowrap text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis pulvinar mi ut imperdiet. Curabitur pretium dapibus est, non dignissim lacus interdum dapibus.</p>
								</div>
							</div>
							<div class="flex space-x-1/2 min-w-0">
								<div><svg viewBox="0 0 1 1" class="h-2 bg-gradient-to-br from-primary-850 to-primary-900 rounded-1/4" /></div>
								<div class="flex-1 flex flex-col min-w-0">
									<h2 class="text-lg leading-1 font-bold text-neutral-150">Some Title</h2>
									<p class="text-sm leading-1 overflow-ellipsis overflow-hidden whitespace-nowrap text-neutral-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis pulvinar mi ut imperdiet. Curabitur pretium dapibus est, non dignissim lacus interdum dapibus.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</aside>
		</div>
	</centered-section>
</template>

<script lang="ts">
	import { defineComponent, reactive } from 'vue'
	import CenteredSection from '../components/CenteredSection.vue'

	export default defineComponent({
		components: { CenteredSection },
		setup () {
			const posts = reactive([
				{ id: 1, date: new Date(), comments: 12, likes: 54, author: 'Person 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis pulvinar mi ut imperdiet. Curabitur pretium dapibus est, non dignissim lacus interdum dapibus. Curabitur sed nunc nec magna tempor semper. Duis cursus lorem nisi, in suscipit augue rhoncus faucibus. Nulla luctus, odio in eleifend imperdiet, dolor tortor mattis eros, vel luctus ante odio eu ex. Fusce ut diam ornare, volutpat metus in, venenatis orci.' },
				{ id: 2, date: new Date(), comments: 2, likes: 87, author: 'Person 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis pulvinar mi ut imperdiet. Curabitur pretium dapibus est, non dignissim lacus interdum dapibus. Curabitur sed nunc nec magna tempor semper. Duis cursus lorem nisi, in suscipit augue rhoncus faucibus. Nulla luctus, odio in eleifend imperdiet, dolor tortor mattis eros, vel luctus ante odio eu ex. Fusce ut diam ornare, volutpat metus in, venenatis orci.' },
				{ id: 3, date: new Date(), comments: 98, likes: 33, author: 'Person 3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis pulvinar mi ut imperdiet. Curabitur pretium dapibus est, non dignissim lacus interdum dapibus. Curabitur sed nunc nec magna tempor semper. Duis cursus lorem nisi, in suscipit augue rhoncus faucibus. Nulla luctus, odio in eleifend imperdiet, dolor tortor mattis eros, vel luctus ante odio eu ex. Fusce ut diam ornare, volutpat metus in, venenatis orci.' },
				{ id: 4, date: new Date(), comments: 1, likes: 5, author: 'Person 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis pulvinar mi ut imperdiet. Curabitur pretium dapibus est, non dignissim lacus interdum dapibus. Curabitur sed nunc nec magna tempor semper. Duis cursus lorem nisi, in suscipit augue rhoncus faucibus. Nulla luctus, odio in eleifend imperdiet, dolor tortor mattis eros, vel luctus ante odio eu ex. Fusce ut diam ornare, volutpat metus in, venenatis orci.' }
			])
			return {
				posts
			}
		}
	})
</script>

