import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import PostsManager from '@/components/PostsManager.vue'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
    issuer: 'https://dev-476931-admin.okta.com/oauth2/default',
    client_id: '0oa26ph1z9cUsG6JW4x6',
    redirect_uri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email'
})

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
                // component: () => {
                //     import ('../components/Hello.vue')
                // }
        },
        {
            path: '/implicit/callback',
            component: Auth.handleCallback()
        },
        {
            path: '/posts-manager',
            name: 'PostsManager',
            component: PostsManager,
            // component: () => {
            //     import ('../components/PostsManager.vue')
            // },
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router