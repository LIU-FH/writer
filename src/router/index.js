import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index.vue')
const Home = () => import('../views/home.vue')
const Article = () => import('../views/article.vue')
const Collector = () => import('../views/collector.vue')
const Doc = () => import('../views/doc.vue')
const MdEditor = () => import('../views/work/mdEditor.vue')
const CheatSheet = () => import('../views/work/cheatSheet.vue')
const Spider = () => import('../views/work/spider.vue')
const Turndown = () => import('../views/work/turndown.vue')
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component:Index ,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            }, {
                path: '/article',
                name: 'Article',
                component: Article,
            },
            {
                path: '/collector',
                name: 'Collector',
                component: Collector,
            }, {
                path: '/doc',
                name: 'Doc',
                component: Doc,
            },
        ]
    },{
        path: '/mdeditor',
        name: 'MdEditor',
        component: MdEditor,
    },
    {
        path: '/spider',
        name: 'Spider',
        component: Spider,
    },{
        path: '/cheatsheet',
        name: 'CheatSheet',
        component: CheatSheet,
    },{
        path: '/turndown',
        name: 'Turndown',
        component: Turndown,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
})

export default router
