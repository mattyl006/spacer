import { createRouter, createWebHashHistory } from 'vue-router';
import Search from '../views/Search.vue';

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
