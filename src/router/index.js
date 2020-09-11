import Vue from 'vue'
import Router from 'vue-router'

import calender from '../views/calender'
import index from '../views/index'

Vue.use(Router)

// let router = new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index
//     },
//     {
//       path: '/calender',
//       name: 'calender',
//       component: calender
//     }
//   ]
// });
// router.beforeEach((to, from, next) => {
//   console.log('Going from: '+from+' to: '+to);
//   next;
// })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/calender',
      name: 'calender',
      component: calender
    }
  ]
})

// router.onError(error => {
//   console.log(error);
// })