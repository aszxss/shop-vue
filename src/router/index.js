import vue from 'vue';
import vueRouter from 'vue-router'
vue.use(vueRouter);
export default new vueRouter({
    routes:[
        {
            path:'/home',
            component:()=>import('../pages/Home/home.vue'),
            meta:{
                show:true
            }
        },
        {
            path:'/login',
            component:()=>import('../pages/Login/login.vue'),
            meta:{
                show:false
            }
        },
        {
            path:'/register',
            component:()=>import('../pages/Register/register.vue'),
            meta:{
                show:false
            }
        },
        {  
             name:'search',
            path:'/search/:keyword',
            component:()=>import('../pages/Search/search.vue'),
            meta:{
                show:true
            }
        },
        {
            path:'*',
            redirect:'/home'
        },
        
    ],
    mode:'history'
})