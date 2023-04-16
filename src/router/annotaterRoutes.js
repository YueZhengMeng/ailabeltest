import Layout from '../layout/index.vue'


export const annotaterRoutes = [
    //标注员端
    //标注
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            // title: '标注',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['annotater']
        },
        children: [{
            path: 'Annotater_Annotate',
            name: 'Annotater_Annotate',
            component: () =>
                import ('../views/form-table/Annotater_Annotate.vue'),
            meta: {
                title: '标注',
                roles: ['annotater']
            },
        }
    ]
            
    },
    //标注记录
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            // title: '标注记录',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['annotater']
        },
        children: [{
            path: 'Annotater_AnnotationRecord',
            name: 'Annotater_AnnotationRecord',
            component: () =>
                import ('../views/form-table/Annotater_AnnotationRecord.vue'),
            meta: {
                title: '标注记录',
                roles: ['annotater']
            }
        }]
    },
    
]