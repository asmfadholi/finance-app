

import Vue from 'vue';
import Router from 'vue-router';
import Example from './modules/example/example';

Vue.use(Router);

const moduleRoutes = [Example];

const baseRoutes = [
  {
    path: '*',
    redirect: '/example',
    // beforeEnter(to, from, next) {
    //   const idToken = localStorage.getItem('idToken');
    //   const userId = localStorage.getItem('userId');
    //   if (idToken) {
    //     next(`/wrapper/${userId}`);
    //   } else {
    //     next();
    //   }
    // },
  },
];

const routes = baseRoutes.concat(...moduleRoutes);

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
