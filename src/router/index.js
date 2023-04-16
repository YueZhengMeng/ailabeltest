import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index.vue'
import { userRoutes } from './userRoutes'
import { annotaterRoutes } from './annotaterRoutes'
import { checkerRoutes } from './checkerRoutes'
import { adminRoutes } from './adminRoutes'

Vue.use(Router)

/**
 * hidden: true                  如果设置为 true，该项菜单将不会显示在菜单栏中(默认为 false)
 * meta : {
    title: 'title'               菜单名
    icon: 'icon-name'            图标名
    fixed: true                  如果设置为 true，该项 tag 将一直存在 tag 栏中(默认为 false)
  }
 * */

export const constantRoutes = [{
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        hidden: true,
        meta: { title: '登录',
        roles: ['user','annotater','checker','admin']
    }
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/Register.vue'),
        hidden: true,
        meta: { title: '注册',
        roles: ['user','annotater','checker','admin']
    }
    },
    {
        path: '/annotation',
        name: 'annotation',
        component: () =>
            import ('../views/annotation/annotation.vue'),
        hidden: true,
        meta: { title: '标注',
        roles: ['user','annotater','checker','admin']
    }
    },
    {
        path: '/user_showannotation',
        name: 'user_showannotation',
        component: () =>
            import ('../views/annotation/user_showannotation.vue'),
        hidden: true,
        meta: { title: '显示标注',
        roles: ['user','annotater','checker','admin']
     }
    },
    {
        path: '/other_showannotation',
        name: 'other_showannotation',
        component: () =>
            import ('../views/annotation/other_showannotation.vue'),
        hidden: true,
        meta: { title: '显示标注',
        roles: ['user','annotater','checker','admin']
     }
    },
    
    {
        path: '/checkannotation',
        name: 'checkannotation',
        component: () =>
            import ('../views/annotation/checkannotation.vue'),
        hidden: true,
        meta: { title: '审核',
        roles: ['user','annotater','checker','admin']
    }
    },
    {
        path: '401',
        name: '401',
        component: () =>
            import ('../views/error-page/401.vue'),
        hidden: true,
        meta: { title: '401',
        roles: ['user','annotater','checker','admin']
     }
    },
    {
        path: '404',
        name: '404',
        component: () =>
            import ('../views/error-page/404.vue'),
        hidden: true,
        meta: { title: '404',
        roles: ['user','annotater','checker','admin']
    }
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'Home',
            component: () =>
                import ('../views/Home.vue'),
            meta: {
                title: '首页',
                icon: 'vue-dsn-icon-index',
                fixed: true,
                roles: ['user','annotater','checker','admin']
            }
        }]
    },

    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/user-center',
        hidden: true,
        children: [{
            path: 'user-center',
            name: 'UserCenter',
            component: () =>
                import ('../views/UserCenter.vue'),
            meta: {
                title: '个人中心',
                roles: ['user','annotater','checker','admin']
            }
        }]
    },


]


// const routes = [...constantRoutes, ...asyncRoutes]

// // const role = ''
// const role = 'user'
// const role = 'annotater'
// const role = 'checker'
// const role = 'admin' 

const routes = [...constantRoutes,...userRoutes,...annotaterRoutes,...checkerRoutes,...adminRoutes];
// const routes = [...constantRoutes];

export const getRole = () => localStorage.getItem("_role") || "user";

export const getMenus = ()=> {
    const role = getRole();
    let menus = [...constantRoutes];
    if (role == 'user') {
        menus.push(...userRoutes)
        routes.push(...userRoutes)
    } else if (role == 'annotater') {
        menus.push(...annotaterRoutes)
        routes.push(...annotaterRoutes)
    } else if (role == 'checker') {
        menus.push(...checkerRoutes)
        routes.push(...checkerRoutes)
    } else if (role == 'admin') {
        menus.push(...adminRoutes)
        routes.push(...adminRoutes)
    }
    return menus;
}

// const role = getRole();
// if (role == 'user') {
//     routes.push(...userRoutes)
// } else if (role == 'annotater') {
//     routes.push(...annotaterRoutes)
// } else if (role == 'checker') {
//     routes.push(...checkerRoutes)
// } else if (role == 'admin') {
//     routes.push(...adminRoutes)
// }

export default new Router({
    mode: 'hash',
    routes
})

