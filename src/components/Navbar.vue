<template>
	<nav class="navbar h-16 pt-4 bg-blue-500 text-white">
		<div class="container flex wrapper justify-between">
			<radio v-on:choosenPlan="changePlan($event)"></radio>
			<date-picker v-show="showMe"></date-picker>
			<quarter-picker v-show="!showMe"></quarter-picker>
			<checkbox v-on:showLabs="showlabs($event)"></checkbox>
		</div>
	</nav>
</template>

<script>
	import Checkbox from './Select/Checkbox.vue';
	import Radio from './Select/Radio.vue';
	import DatePicker from './Select/DatePicker.vue';
	import Quarter from './Select/QuarterPicker.vue';
	export default {
		data() {
			return {
				showMe: true,
			};
		},
		components: {
			Checkbox,
			Radio,
			DatePicker,
			'quarter-picker': Quarter,
		},
		methods: {
			changePlan(val) {
				this.showMe = val;
			},
			showlabs(e) {
				this.$emit('labs', e);
			},
		},
	};
</script>

<style scoped>
	.wrapper {
		align-items: center;
	}
</style>
