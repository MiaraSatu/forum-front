<template>
	<div v-if="hasMessageFlash">
		<div v-for="message in messageFlash" v-bind:key="message">
			{{ message.message }}
		</div>
	</div>
	<router-view />
</template>

<script>
import {mapState} from 'vuex'

export default {
	name: 'App',
	computed: {
		...mapState(['messageFlash']),
		hasMessageFlash() {
			return this.messageFlash.length != 0
		}
	}
}

</script>