import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'maid',
      redirect:{name:'music'},
      component: require('@/views/main').default,
      children:[
        {
          path:'music',
          name:'music',
          component:()=>import('../views/music/index.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
