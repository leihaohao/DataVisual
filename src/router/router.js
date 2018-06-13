import Main from '@/views/Main.vue';



export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@/views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: {
        path: '/custom/comprehensive'
    }
};
let appRouter = [
    {
        path: '/main',
        icon: 'ios-paper',
        title: 'main',
        name: 'main',
        component: Main,
        children: [
            { path: '/comprehensive',  name: 'comprehensive', component: resolve => { require(['@/views/page/comprehensive/comprehensive.vue'], resolve); },},

            { path: '/equip',  name: 'equip', component: resolve => { require(['@/views/page/equip/equip.vue'], resolve); }},
            { path: '/ov-equiphave',  name: 'equiphave', component: resolve => { require(['@/views/page/equip/overview/ov-equiphave.vue'], resolve); }},
            { path: '/ov-equipshort',  name: 'equipshort', component: resolve => { require(['@/views/page/equip/overview/ov-equipshort.vue'], resolve); }},
            { path: '/ov-avaliablerate',  name: 'avaliablerate', component: resolve => { require(['@/views/page/equip/overview/ov-avaliablerate.vue'], resolve); }},
            
            { path: '/resources', title: 'resources', name: 'resources', component: resolve => { require(['@/views/page/resources/resources.vue'], resolve); } },
            { path: '/ov-haveamount',  name: 'haveamount', component: resolve => { require(['@/views/page/resources/overview/ov-haveamount.vue'], resolve); }},
            { path: '/ov-shortamount',  name: 'shortamount', component: resolve => { require(['@/views/page/resources/overview/ov-shortamount.vue'], resolve); }},
            { path: '/ov-equippersonamount',  name: 'equippersonamount', component: resolve => { require(['@/views/page/resources/overview/ov-equippersonamount.vue'], resolve); }},

            { path: '/business', title: 'business', name: 'business', component: resolve => { require(['@/views/page/business/business.vue'], resolve); } },
            { path: '/ov-projprogress',  name: 'projprogress', component: resolve => { require(['@/views/page/business/overview/proj-overview/ov-projprogress.vue'], resolve); }},
            { path: '/ov-projsuccess',  name: 'projsuccess', component: resolve => { require(['@/views/page/business/overview/proj-overview/ov-projsuccess.vue'], resolve); }},
            { path: '/ov-contractprogress',  name: 'contractprogress', component: resolve => { require(['@/views/page/business/overview/contract-overview/ov-contractprogress.vue'], resolve); }},
            { path: '/ov-contractsuccess',  name: 'contractsuccess', component: resolve => { require(['@/views/page/business/overview/contract-overview/ov-contractsuccess.vue'], resolve); }},
            { path: '/ov-contractdeferred',  name: 'contractdeferred', component: resolve => { require(['@/views/page/business/overview/contract-overview/ov-contractdeferred.vue'], resolve); }},
            { path: '/ov-appropriate',  name: 'appropriate', component: resolve => { require(['@/views/page/business/overview/money-overview/ov-appropriate.vue'], resolve); }},
            { path: '/ov-overspend',  name: 'overspend', component: resolve => { require(['@/views/page/business/overview/money-overview/ov-overspend.vue'], resolve); }},

            { path: '/reserve', title: 'reserve', name: 'reserve', component: resolve => { require(['@/views/page/reserve/reserve.vue'], resolve); } },
            { path: '/ov-reserve',  name: 'ovreserve', component: resolve => { require(['@/views/page/reserve/overview/ov-reserve.vue'], resolve); }},
            
            { path: '/task', title: 'task', name: 'task', component: resolve => { require(['@/views/page/task/task.vue'], resolve); } },
            { path: '/ov-joinperson',  name: 'joineperson', component: resolve => { require(['@/views/page/task/overview/ov-joinperson.vue'], resolve); }},
            { path: '/ov-joinequip',  name: 'joinequip', component: resolve => { require(['@/views/page/task/overview/ov-joinequip.vue'], resolve); }},

            { path: '/list/:id',  name: 'list', component: resolve => { require(['@/views/page/list/list.vue'], resolve); }},

            { path: '/equip-detail',  name: 'equip-detail', component: resolve => { require(['@/views/page/equip/detail/detail.vue'], resolve); },},
            { path: '/projsuccess-detail',  name: 'projsuccess-detail', component: resolve => { require(['@/views/page/detail/projsuccess-detail.vue'], resolve); }},

            { path: '/pageset',  name: 'pageset', component:resolve => { require(['@/views/page/pageset/pageset.vue'], resolve); },},

            { path: '/custom/:id',  name: 'custom', component:resolve => { require(['@/views/page/custom/custom.vue'], resolve); },},
        ]
    }
    
];
//appRouter = JSON.parse(window.sessionStorage.getItem('permission')) || appRouter ;
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
//  loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
