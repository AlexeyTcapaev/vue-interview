import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const FractionPage = () => import("../components/FractionPage.vue");
const SocketPage = () => import("../components/SocketPage.vue");
const index = () => import("../components/Index.vue");
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            children: [{
                path: 'fraction',
                name: 'FractionPage',
                component: FractionPage
            },
            {
                path: 'socket',
                name: 'SocketPage',
                component: SocketPage
            }]
        },]
});