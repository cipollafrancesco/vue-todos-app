import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoApp from '../components/TodoApp'
import Page404 from '../views/Page404'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'todo',
        component: TodoApp,
        props: {name: 'Ciccio'}
    },
    {
        path: '/hello',
        name: 'hello',
        component: HelloWorld,
    },
    {
        path: '*',
        name: '404',
        component: Page404,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
