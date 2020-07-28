export default [
    {
        path: 'person',
        name: 'person',
        component: () => import('@/views/person/personInfo.vue'),
        meta: {
            title: '个人信息修改'
        },
    },
]