import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '前台頁面',
    component: () => import('../views/UserLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: '/service',
        name: 'Service',
        component: () => import('../views/ServiceView.vue'),
      },
      {
        path: '/works',
        name: 'Works',
        component: () => import('../views/WorksView.vue'),
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/BlogsView.vue'),
        children: [
          {
            path: 'blogContent',
            component: () => import('../views/BlogContentView.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;