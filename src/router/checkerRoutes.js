import Layout from '../layout/index.vue'


export const checkerRoutes = [
    //审核员端
    //审核
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            // title: '审核',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['checker']
        },
        children: [{
            path: 'Checker_Check',
            name: 'Checker_Check',
            component: () =>
                import ('../views/form-table/Checker_Check.vue'),
            meta: {
                title: '审核',
                roles: ['checker']
            }
        }]
    },
    //审核记录
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            // title: '审核记录',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['checker']
        },
        children: [{
            path: 'Checker_CheckRecode',
            name: 'Checker_CheckRecode',
            component: () =>
                import ('../views/form-table/Checker_CheckRecode.vue'),
            meta: {
                title: '审核记录',
                roles: ['checker']
            }
        }]
    },
]