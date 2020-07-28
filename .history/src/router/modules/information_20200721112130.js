export default [
    {
        path: 'information',
        name: 'information',
        redirect: { name: 'news' },
        component: () => import('@/pages/information/information.vue'),
        meta: {
            title: '消息中心'
        },
        children: [
            {
                path: 'news',
                name: 'news',
                component: () => import('@/pages/information/news.vue'),
            },
            {
                path: 'transcation',
                name: 'transcation',
                component: () => import('@/pages/information/transcation.vue'),
            },
            {
                path: 'meeting',
                name: 'meeting',
                component: () => import('@/pages/information/meeting.vue'),
            },
        ]
    },
]