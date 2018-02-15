import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Signup from '@/components/Signup';
import Signin from '@/components/Signin';
import Browse from '@/components/Browse';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/register',
      name: 'Signup',
      component: Signup,
    }, {
      path: '/login',
      name: 'Signin',
      component: Signin,
    }, {
      path: '/browse',
      name: 'Browse',
      component: Browse,
    },
  ],
});
