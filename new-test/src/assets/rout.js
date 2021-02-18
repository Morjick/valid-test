import VueRouter from 'vue-router'

import singin from '@/components/singin'
import personal from '@/components/personal'

export default new VueRouter({
    routes : [
        {
            path: '/personal',
            component: personal,
        },
        {
            path: '/',
            component: singin,
        }
    ]
  })