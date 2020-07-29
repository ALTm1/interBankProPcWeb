export default [
    {
        path: 'industry',
        name: 'industry',
         redirect: { name: 'realnews' },
        component: () => import('@/views/industry/industry.vue'),
        meta: {
            title: '资讯'
        },
        children: [
            // 行业动态里的资讯有子路由
                        {
                        path: 'realnews',
                        name: 'realnews',
                        redirect: { name: 'map' },
                        component: () => import('@/views/industry/realNews/realNews.vue'),
                        children:[
                            {
                                path: 'map',
                                name: 'map',
                                component: () => import('@/views/industry/realNews/map.vue'),
                            },
                            {
                                path: 'news',
                                name: 'news',
                                component: () => import('@/views/industry/realNews/news.vue'),
                            },
                            // 新闻详情页
                            {
                                path: 'newsdetail',
                                name: 'newsdetail',
                                component: () => import('@/views/industry/realNews/newsDetail.vue'),
                            },
                            
                        ]
                    },
         
            {
                path: 'meeting',
                name: 'meeting',
                component: () => import('@/views/industry/meeting/meeting.vue'),
            },
            // 会议详情页
            {
                path: 'meetdetail',
                name: 'meetdetail',
                component: () => import('@/views/industry/meeting/meetDetail.vue'),
            },
            {
                path: 'training',
                name: 'training',
                component: () => import('@/views/industry/training/training.vue'),
            },
            // 培训详情页
            {
                path: 'traindetail',
                name: 'traindetail',
                component: () => import('@/views/industry/training/trainDetail.vue'),
            },
            {
                path: 'mechanism',
                name: 'mechanism',
                component: () => import('@/views/industry/mechanism/mechanism.vue'),
            },
            // 机构详情页
            {
                path: 'mechanismdetail',
                name: 'mechanismdetail',
                component: () => import('@/views/industry/mechanism/mechanismDetail.vue'),
            },
        ]
    },
]