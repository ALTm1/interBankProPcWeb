export default [
    {
        path: 'information',
        name: 'information',
        redirect: { name: 'news' },
        component: () => import('@/views/information/information.vue'),
        meta: {
            title: '消息中心'
        },
        children: [
            {
                path: 'news',
                name: 'news',
                component: () => import('@/views/information/news.vue'),
            },
            {
                path: 'transcation',
                name: 'transcation',
                component: () => import('@/views/information/transcation.vue'),
            },
            {
                path: 'meeting',
                name: 'meeting',
                component: () => import('@/views/information/meeting.vue'),
            },
        ]
    },
]