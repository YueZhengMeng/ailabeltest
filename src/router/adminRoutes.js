import Layout from '../layout/index.vue'


export const adminRoutes = [
    //管理员端
    //切片管理
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            // title: '切片管理',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['admin']
        },
        children: [{
            path: 'Admin_ImageManage',
            name: 'Admin_ImageManage',
            component: () =>
                import ('../views/form-table/Admin_ImageManage.vue'),
            meta: {
                title: '切片管理',
                roles: ['admin']
            }
        }]
    },
    //标注结果管理
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            // title: '标注结果管理',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['admin']
        },
        children: [{
            path: 'Admin_AnnotationManage',
            name: 'Admin_AnnotationManage',
            component: () =>
                import ('../views/form-table/Admin_AnnotationManage.vue'),
            meta: {
                title: '标注结果管理',
                roles: ['admin']
            }
        }]
    },
    //人员管理
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            // title: '人员管理',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['admin']
        },
        children: [{
            path: 'Admin_UserManage',
            name: 'Admin_UserManage',
            component: () =>
                import ('../views/form-table/Admin_UserManage.vue'),
            meta: {
                title: '人员管理',
                roles: ['admin']
            }
        }]
    },

]