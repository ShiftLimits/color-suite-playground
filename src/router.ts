import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export function createAppRouter() {
	const routes:RouteRecordRaw[] = [
		{ path: '/', component: () => import('./pages/index.vue') },
		{ path: '/colors', component: () => import('./pages/colors.vue') },
		{ path: '/:pathMatch(.*)*', component: () => import('./pages/404.vue') }
	]

	const history = createWebHistory()

	const router = createRouter({
		routes,
		history
	})

	return router
}
