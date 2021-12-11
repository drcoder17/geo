import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueGeoLocation from 'vue-browser-geolocation';
require('dotenv').config();

import App from './App.vue';
import './assets/styles.css';

Vue.use(VueGoogleMaps, {
	load: {
		key: process.env.VUE_APP_API_KEY,
		libraries: ['places'],
	},
});
Vue.use(VueGeoLocation);
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
