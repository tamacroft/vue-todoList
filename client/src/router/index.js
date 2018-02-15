import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Signup from '@/components/Signup';
import Signin from '@/components/Signin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    }, {
      path: '/register',
      name: 'Signup',
      component: Signup,
    }, {
      path: '/login',
      name: 'Signin',
      component: Signin,
    },
  ],
});
