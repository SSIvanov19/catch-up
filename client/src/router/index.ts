import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from '../views/DashboardView.vue';
import Login from '../views/LoginView.vue';
import Items from '../views/ItemsView.vue';
import AddItem from '../views/AddItemView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Login },
        { path: '/dashboard', component: Dashboard },
        { path: '/items', component: Items },
        { path: '/addItem', component: AddItem },
    ]
})

export default router;