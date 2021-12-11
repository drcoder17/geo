<template>
	<div class="map mb-10 mt-0">
		<GmapMap id="gmap" :center="myCoordinates" :zoom="8">
			<GmapMarker
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
				:clickable="true"
				@click="openInfoWindow(m.position)"
			>
				<gmap-info-window
					v-if="selectedLocation !== null"
					:position="{
						lat: selectedLocation.lat,
						lng: selectedLocation.lng,
					}"
					:opened="infoBoxOpen"
					@closeclick="infoBoxOpen = false"
				>
					<div class="infoWindow text-lg" style="width: 250px">
						<h2 id="infoWindow-location">
							<strong>Nomi:</strong> {{ m.title }}
						</h2>
						<p><strong>Hudud:</strong> {{ m.reg_name }}</p>
						<p><strong>Quvvati:</strong> {{ m.power }}</p>
						<p><strong>Turi:</strong> {{ m.type }}</p>
						<button
							class="bg-blue-400 px-2 py-1 rounded-md shadow-lg"
							@click.prevent="detailedInfo"
						>
							Batafsil
						</button>
					</div>
				</gmap-info-window>
			</GmapMarker>
		</GmapMap>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'Map',
		data() {
			return {
				currentPlace: null,
				myCoordinates: {
					lat: 0,
					lng: 0,
				},
				markers: [],
				labUrl: process.env.VUE_APP_LABS_URL,
				selectedLocation: null,
				infoBoxOpen: false,
			};
		},
		props: {
			isShown: {
				type: Boolean,
				required: true,
				default: false,
			},
		},
		async mounted() {
			this.geolocate();

			const { data } = await axios.get(this.labUrl);

			data.map((lab) => {
				if (lab.latitude !== null && lab.longtitude !== null) {
					const marker = {
						capacity: lab.capacity,
						exp_year: lab.exploitation_year,
						id: lab.id,
						last_reconstruction_date: lab.last_reconstruction_date,
						position: {
							lat: lab.latitude,
							lng: lab.longtitude,
						},
						power: lab.power,
						reg_name: lab.region_name,
						title: lab.title,
						type: lab.type,
					};
					this.markers.push(marker);
					this.myCoordinates = marker.position;
				}
			});
		},
		methods: {
			geolocate() {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						this.myCoordinates = {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						};
					},
					(error) => {
						alert(error.message);
					}
				);
			},
			openInfoWindow(location) {
				this.selectedLocation = location;
				this.infoBoxOpen = !this.infoBoxOpen;
			},
			detailedInfo() {
				console.log(
					"Labarotoriya haqida batafsil ma'lumot beruvchi link yoki modal oyna!"
				);
			},
		},
	};
</script>

<style scoped>
	#gmap {
		width: 100%;
		height: 700px;
		margin: 0 auto;
	}
</style>
