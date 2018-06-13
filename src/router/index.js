import Vue from 'vue';
import iView from 'iview';
import Util from '../libs/util';
import VueRouter from 'vue-router';
import {routers} from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);
//
//router.beforeEach((to, from, next) => {
//  iView.LoadingBar.start();
//  Util.title(to.meta.title);
//  next();
//});
//
//router.afterEach((to) => {
//  iView.LoadingBar.finish();
//  window.scrollTo(0, 0);
//});


router.beforeEach((to, from, next) => {
    if(from.query.name !== 'config'){
    	next();
    }
    if(to.query.name === 'ok'){
    	next();
    }
    if(to.query.name === 'cancel'){
    	next();
    }
    if(to.name === "pageset"){
        next();
    }
});