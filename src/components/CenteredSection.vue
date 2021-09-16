<template>
	<div class="flex justify-center flex-1">
		<div class="flex-grow flex justify-end">
			<div class="w-full max-w-3 bg-gradient-to-r from-transparent to-neutral-950"></div>
		</div>
		<section class="w-full max-w-lg" v-bind="$attrs">
			<slot />
		</section>
		<div class="flex-grow flex">
			<div class="w-full max-w-3 bg-gradient-to-l from-transparent to-neutral-950"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		
	},
})
</script>
