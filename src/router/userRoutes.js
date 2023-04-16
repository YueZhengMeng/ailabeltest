import Layout from '../layout/index.vue'


export const userRoutes = [
    //医院用户端
    //查看结果
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            // title: '查看结果',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['user']
        },
        children: [{
            path: 'User_ViewResults',
            name: 'User_ViewResults',
            component: () =>
                import ('../views/form-table/User_ViewResults.vue'),
            meta: {
                title: '查看结果',
                roles: ['user']
            }
        }]
    },
    //上传切片
    {
        path: '/tools',
        name: 'Tools',
        component: Layout,
        redirect: '/tools/image-upload',
        meta: {
            // title: '上传图片',
            icon: 'vue-dsn-icon-zujian',
            roles: ['user']
        },
        children: [{
            path: 'image-upload',
            name: 'ImageUpload',
            component: () =>
                import ('../views/tools/ImageUpload.vue'),
            meta: {
                title: '上传图片',
                roles: ['user']
            }
        }, ]
    },

]