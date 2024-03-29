import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
        },
    ],
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

Vue.$router = router;
window.$router = router;

export default router;
