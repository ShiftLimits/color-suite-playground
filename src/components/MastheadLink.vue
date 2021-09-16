<template>
	<router-link :to="to" custom v-slot="{ isActive, href, navigate }">
		<a :href="href" @click="navigate" class="flex items-end justify-center min-w-4 pb-1/8 px-1/2 bg-gradient-to-b from-neutral-750 to-neutral-700 border-b-1/8 hover:!border-b-primary-500 hover:from-neutral-650 hover:to-neutral-700" :class="{ '!border-b-primary-700 font-bold': isActive, '!border-b-neutral-500': !isActive }"><slot /></a>
	</router-link>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		props: ['to'],
		setup() {
			
		}
	})
</script>
