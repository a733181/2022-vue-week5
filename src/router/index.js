import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/product',
  },
  {
    path: '/product',
    component: () => import('../views/Product.vue'),
  },
  {
    path: '/product/:id',
    props: true,
    component: () => import('../views/ProductDetail.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/orderinformation',
    component: () => import('../views/order/OrderInformation.vue'),
  },
  {
    path: '/orderCheck',
    component: () => import('../views/order/OrderCheck.vue'),
  },
  {
    path: '/findOrder',
    component: () => import('../views/order/FindOrder.vue'),
  },
  {
    path: '/:notFound(.*)',
    redirect: '/product',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
