<template>
	<div id="app">
		<navbar v-on:labs="showLabs($event)"></navbar>
		<div class="container">
			<Map :isShown="isShown" />
		</div>
	</div>
</template>

<script>
	import Map from './components/Map.vue';
	import Navbar from './components/Navbar.vue';

	export default {
		name: 'App',
		components: {
			Navbar,
			Map,
		},
		data() {
			return {
				isShown: false,
			};
		},
		methods: {
			showLabs(e) {
				this.isShown = e;
			},
		},
	};
</script>

<style>
	.container {
		width: 1200px;
		margin: 0 auto;
		padding: 0 15px;
	}
</style>
