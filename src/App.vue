<template>
	<app-nav />
	<router-view/>
</template>

<script>
import AppNav from '@/components/Nav.vue'

export default {
	name: 'App',
	components: {
		AppNav,
	}
}
</script>