import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './components/dashboard/index.vue'
import User from './components/user/index.vue'
import UserCreate from './components/user/create.vue'

Vue.use(VueRouter)


const routes = [
{path : '/' , component: Dashboard},
{path : '/user' , component: User},
{path : '/user/create' , component: UserCreate}
];

export default new VueRouter({
    mode: 'history',
    routes
});