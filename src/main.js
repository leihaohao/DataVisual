import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import store from './store/store';
import App from './app.vue';

import './assets/styles/reset.css';
import './assets/styles/function.css';
import './assets/styles/global.css';
import './assets/styles/coverIview.css';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts';
import drag from '@/libs/directive'
Vue.prototype.$echarts = echarts;
Vue.use(iView);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    mounted () {
       // this.$store.commit('updateMenulist');
    }
});
