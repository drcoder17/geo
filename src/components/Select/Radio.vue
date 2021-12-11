<template>
	<div class="radio">
		<form class="flex form">
			<div class="flex">
				<input
					type="radio"
					@change="selectPlan"
					class="w-6 h-6 mr-2"
					name="selectPlan"
					id="month"
					value="month"
					checked
				/>
				<label for="month" class="mr-5">Oylik bo'yicha</label>
			</div>
			<div class="flex">
				<input
					class="w-6 h-6 mr-2"
					@change="selectPlan"
					type="radio"
					name="selectPlan"
					id="quarter"
					value="quarter"
				/>
				<label for="quarter">Chorak bo'yicha</label>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'Radio',
		data() {
			return {
				month: true,
			};
		},
		methods: {
			selectPlan() {
				this.month = !this.month;
				this.$emit('choosenPlan', this.month);
			},
		},
	};
</script>

<style scoped>
	.form {
		align-items: center;
	}
</style>
