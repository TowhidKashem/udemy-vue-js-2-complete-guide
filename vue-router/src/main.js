import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    return {
      x: 0,
      y: 0
    }
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global BeforeEach');
  next(); // next(false) for halting execution | next('/path') for redirect
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
