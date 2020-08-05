import Vue from 'vue';
import Router from 'vue-router';
import Conta from './views/Conta.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'conta',
        component: Conta,
    },
];

const router = new Router({
    routes: routes,
});


export default router;

