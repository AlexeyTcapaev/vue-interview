import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const IndexPage = () => import("../components/IndexPage.vue");
export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'IndexPage',
        component: IndexPage
    }]
});