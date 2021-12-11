<template>
	<div class="date-picker flex items-center relative">
		<p class="label mr-2">Oylik va yil</p>
		<div
			class="bg-blue-400 rounded-md p-1 flex items-center cursor-pointer"
			@click="pickDate"
		>
			<p>{{ choosen }}</p>
			<img
				src="../../assets/images/calendar.png"
				class="ml-3"
				width="25"
				height="10"
				alt="a calendar icon"
			/>
		</div>
		<form
			class="absolute bg-white top-14 -left-5 shadow-xl rounded-lg text-gray-900 w-100 z-10"
			v-show="isOpen"
		>
			<div class="flex items-center w-100">
				<span class="ml-36 mr-auto">{{ year }}</span>
				<span class="cursor-pointer">
					<div class="up px-4 mb-0.5 bg-indigo-100" @click="year++">
						&#8593;
					</div>
					<div class="down px-4 bg-indigo-100" @click="year--">
						&#8595;
					</div>
				</span>
			</div>
			<div class="month-wrapper">
				<div
					v-for="(m, i) in months"
					:key="i"
					class="p-4 m-1 bg-blue-200 cursor-pointer basis rounded-lg"
				>
					<label class="label" :for="m.value">
						<input
							type="checkbox"
							v-model="checkedMonth"
							class="hidden"
							:name="m.value"
							:id="m.value"
							:value="m.value"
							checked
							@change="selMonth(m.value)"
						/>
						<span
							class="month-name text-center absolute top-0 left-0 right-0 bottom-0 pt-1 rounded-lg cursor-pointer"
						>
							{{ m.name }}
						</span>
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						name="whole-year"
						class="w-10"
						id="whole-year"
					/>
					<label for="whole-year">Yil davomida</label>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'DatePicker',
		data() {
			return {
				choosen: 'Oy va yilni tanlang',
				year: null,
				isOpen: false,
				isShown: true,
				checkedMonth: [],
				months: [
					{
						id: 1,
						name: 'Yanvar',
						value: 'jan',
					},
					{
						id: 2,
						name: 'Fevral',
						value: 'feb',
					},
					{
						id: 3,
						name: 'Mart',
						value: 'mar',
					},
					{
						id: 4,
						name: 'Aprel',
						value: 'apr',
					},
					{
						id: 5,
						name: 'May',
						value: 'mai',
					},
					{
						id: 6,
						name: 'Iyun',
						value: 'jun',
					},
					{
						id: 7,
						name: 'Iyul',
						value: 'jul',
					},
					{
						id: 8,
						name: 'Avgust',
						value: 'aug',
					},
					{
						id: 9,
						name: 'Sentyabr',
						value: 'sep',
					},
					{
						id: 10,
						name: 'Oktyabr',
						value: 'oct',
					},
					{
						id: 11,
						name: 'Noyabr',
						value: 'nov',
					},
					{
						id: 12,
						name: 'Dekabr',
						value: 'dec',
					},
				],
			};
		},
		created() {
			const year = new Date();
			this.year = year.getFullYear();
		},
		methods: {
			pickDate() {
				this.isOpen = !this.isOpen;
			},
			selMonth() {
				console.log(this.checkedMonth);
			},
		},
	};
</script>

<style scoped>
	.month-wrapper {
		width: 350px;
		display: flex;
		flex-wrap: wrap;
	}
	.basis {
		flex-basis: 31%;
		position: relative;
	}
	.month-name {
		background-color: rgb(186, 192, 253);
	}
	input[type='checkbox']:checked ~ .month-name {
		background-color: rgb(107, 121, 253);
	}
</style>
