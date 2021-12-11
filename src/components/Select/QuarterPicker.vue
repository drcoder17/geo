<template>
	<div class="date-picker flex items-center relative">
		<p class="label mr-2">Chorak</p>
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
			class="absolute flex items-center p-2 bg-white top-14 -left-10 shadow-xl rounded-lg text-gray-900 w-100 z-10"
			v-show="isOpen"
		>
			<div>
				<div class="flex items-center w-100">
					<span class="ml-36 mr-auto">{{ year }}</span>
					<span class="cursor-pointer">
						<div
							class="up px-4 mb-0.5 bg-indigo-100"
							@click="year++"
						>
							&#8593;
						</div>
						<div class="down px-4 bg-indigo-100" @click="year--">
							&#8595;
						</div>
					</span>
				</div>
				<div class="month-wrapper my-5">
					<div
						v-for="(q, i) in quarters"
						:key="i"
						class="p-4 m-1 bg-blue-200 cursor-pointer basis rounded-lg"
					>
						<label
							class="label"
							:for="q.value"
							v-if="!showInterval"
						>
							<input
								type="checkbox"
								v-model="checkedQuarter"
								class="hidden quarter-input"
								:name="q.value"
								:id="q.value"
								:value="q.value"
								checked
								@change="selQuarter(q.value)"
							/>
							<span
								class="quarter-name text-center absolute top-0 left-0 right-0 bottom-0 pt-1 rounded-lg cursor-pointer"
							>
								{{ q.name }}
							</span>
						</label>
						<label class="label" :for="q.value" v-if="showInterval">
							<input
								type="radio"
								v-model="checkedInterval"
								class="hidden quarter-input"
								:name="q.value"
								:id="q.value"
								:value="q.value"
								checked
								@change="selQuarter(q.value)"
							/>
							<span
								class="quarter-name text-center absolute top-0 left-0 right-0 bottom-0 pt-1 rounded-lg cursor-pointer"
							>
								{{ q.name }}
							</span>
						</label>
					</div>
					<div class="pt-3">
						<input
							type="checkbox"
							@change="showInterval = !showInterval"
							name="whole-year"
							class="ml-5 p-10"
							id="year"
						/>
						<label for="year" id="whole-year">
							Oraliqni tanlash
						</label>
					</div>
				</div>
				<div>
					<button
						class="px-4 py-2 bg-blue-400 rounded-md"
						v-show="showInterval"
						@click.prevent="formClear"
					>
						Tozalash
					</button>
					<div
						v-show="!showInterval"
						class="flex items-center justify-around interval-controls"
					>
						<button
							@click.prevent="cancelFormQuarter"
							class="px-4 py-2 bg-blue-200 rounded-md"
						>
							Bekor qilish
						</button>
						<button
							@click.prevent="selectOneQuarter"
							class="px-4 py-2 bg-blue-400 rounded-md"
						>
							Tanlash
						</button>
					</div>
				</div>
			</div>
			<div v-show="showInterval">
				<div class="flex items-center w-100 mt-0">
					<span class="ml-36 mr-auto">{{ year + 1 }}</span>
					<span class="cursor-pointer">
						<div
							class="up px-4 mb-0.5 bg-indigo-100"
							@click="year++"
						>
							&#8593;
						</div>
						<div class="down px-4 bg-indigo-100" @click="year--">
							&#8595;
						</div>
					</span>
				</div>
				<div class="month-wrapper my-5">
					<div
						v-for="(q, i) in quarters"
						:key="i"
						class="p-4 m-1 bg-blue-200 cursor-pointer basis rounded-lg"
					>
						<label class="label" :for="q.name">
							<input
								type="radio"
								v-model="checkedInterval"
								class="hidden"
								:name="q.value"
								:id="q.name"
								:value="q.value"
								checked
								@change="selInterval(q.value)"
							/>
							<span
								class="month-name text-center absolute top-0 left-0 right-0 bottom-0 pt-1 rounded-lg cursor-pointer"
							>
								{{ q.name }}
							</span>
						</label>
					</div>
				</div>
				<div class="flex items-center justify-around interval-controls">
					<button
						@click.prevent="formCancel"
						class="px-4 py-2 bg-blue-100 rounded-md"
					>
						Bekor qilish
					</button>
					<button
						@click.prevent="formSubmit"
						class="px-4 py-2 bg-blue-400 rounded-md"
					>
						Tanlash
					</button>
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
				choosen: 'Chorak (va yilni tanlang)',
				isOpen: false,
				year: null,
				showInterval: false,
				quarters: [
					{
						id: 1,
						name: '1-chorak',
						value: 'first',
					},
					{
						id: 2,
						name: '2-chorak',
						value: 'second',
					},
					{
						id: 3,
						name: '3-chorak',
						value: 'third',
					},
					{
						id: 4,
						name: '4-chorak',
						value: 'fourth',
					},
				],
				checkedQuarter: [],
				checkedInterval: [],
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
			selectInterval() {
				console.log('checkes');
			},
			selQuarter(e) {
				console.log(e);
			},
			selInterval(e) {
				console.log(e);
			},
			formCancel() {
				this.checkedQuarter = [];
				this.checkedInterval = [];
				console.log('Cancel form');
			},
			formSubmit() {
				console.log('Submit form');
			},
			formClear() {
				this.checkedQuarter = [];
				this.checkedInterval = [];
				console.log('Clear form');
			},
			selectOneQuarter() {},
			cancelFormQuarter() {},
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
		flex-basis: 47%;
		position: relative;
	}
	input[type='checkbox']:checked ~ .quarter-name {
		background-color: rgb(107, 121, 253);
	}
	input[type='radio']:checked ~ .quarter-name {
		background-color: rgb(107, 121, 253);
	}
	input[type='radio']:checked ~ .month-name {
		background-color: rgb(107, 121, 253);
	}
</style>
