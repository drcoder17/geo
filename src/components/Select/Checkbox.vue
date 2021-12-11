<template>
	<div class="checkbox">
		<form @change="checkLabs" class="flex items-center">
			<input type="checkbox" class="w-4 h-4 mr-2" name="regs" id="regs" />
			<label for="regs">Labarotoriyalarni ko'rsatish</label>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'Checkbox',
		data() {
			return {
				isShown: false,
			};
		},
		methods: {
			checkLabs() {
				this.$emit('showLabs', this.isShown);
				this.isShown = !this.isShown;
			},
		},
	};
</script>

<style></style>
