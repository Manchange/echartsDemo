import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/view/Home.vue')
    },
    {
      path: '/generalityCompany',
      name: 'GeneralityCompany',
      component: ()=>import('@/view/generality/company.vue')
    },
    {
      path: '/generalityPerson',
      name: 'GeneralityPerson',
      component: ()=>import('@/view/generality/person.vue')
    },
    {
      path: '/generalitycart',
      name: 'Generalitycart',
      component: ()=>import('@/view/generality/cart.vue')
    }
  ]
})
