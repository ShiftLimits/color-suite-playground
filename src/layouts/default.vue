<template>
	<masthead />
	<router-view />
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import Masthead from '../components/Masthead.vue'

	export default defineComponent({
		components: { Masthead },
		setup () {
			return {}
		}
	})
</script>

