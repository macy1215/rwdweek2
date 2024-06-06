import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '前台頁面',
    component: () => import('../views/UserLayout.vue'),
    children: [
      {
        path: '/',
        name: '首頁',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: '/service',
        name: '服務項目',
        component: () => import('../views/ServiceView.vue'),
      },
      {
        path: '/works',
        name: '作品集',
        component: () => import('../views/WorksView.vue'),
      },
      {
        path: '/blogs',
        name: '部落格',
        component: () => import('../views/BlogsView.vue'),
      },
      {
        path: '/blogs/:category',
        name: '部落格分類',
        component: () => import('../views/BlogsView.vue'),
      },
      {
        path: '/blog/:id',
        name: '部落格文章',
        component: () => import('../views/BlogContentView.vue'),
      },
      {
        path: '/contact',
        name: '聯絡我',
        component: () => import('../views/ContactView.vue'),
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
