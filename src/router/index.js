// createRouter 创建router实例
// createWebHistory 创建history模式路由
import {createRouter, createWebHistory} from 'vue-router'
import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import home from "@/views/Home/index.vue";
import category from "@/views/Category/index.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [
        {
            path: '/',
            component: Layout,
            // 二级路由
            children:[
                {
                    // 默认渲染页面 置空
                    path:'',
                    component:home
                },  {
                    path:'/category',
                    component:home
                }
            ]
        }, {
            path: '/login',
            component: Login
        },
    ]
})

export default router
