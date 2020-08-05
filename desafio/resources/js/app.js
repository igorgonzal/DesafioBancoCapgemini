import Vue from 'vue';
import App from './app.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})