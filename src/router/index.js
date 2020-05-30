import Vue from 'vue'
import VueRouter from 'vue-router'
import Tokyo from '../views/Tokyo.vue'
import Wards from '../views/Wards.vue'
import HelloWorld from '../components/HelloWorld';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Tokyo',
		component: Tokyo
	},
	{
		path: '/wards',
		name: '23wards',
		component: Wards
	},
	{
		path: '/hello',
		name: 'Hello',
		component: HelloWorld
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
