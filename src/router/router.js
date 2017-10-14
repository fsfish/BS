import Vue from 'vue';
import VueRouter from 'vue-router';
//系统管理员
import sysAdmin from './sysAdmin.js';
//医院管理员
import hosAdmin from './hosAdmin.js';
//医生本人
import doctor from './doctor.js';

Vue.use(VueRouter);

var routes=[
	...sysAdmin,
	...hosAdmin,
	...doctor
	
];

const router = new VueRouter({
    // mode:'history',
    // base: __dirname,
    routes
});

//全局路由钩子
router.afterEach((route) => {
})

export default router;



