export default [
    {
        path: 'fund',
        name: 'fund',
        redirect: { name: 'fundproduct' },
        component: () => import('@/views/fund/fund.vue'),
        meta: {
            title: '基金通'
        },
        children:[
            {
                path: 'fundproduct',
                name: 'fundproduct',
                component: () => import('@/views/fund/fundProduct.vue'),
            },
            {
                path: 'myfund',
                name: 'myfund',
                component: () => import('@/views/fund/myFund.vue'),
            },
            {
                path: 'transcation',
                name: 'transcation',
                component: () => import('@/views/fund/transcation.vue'),
            },
        ]
    },
    {
        path: 'funddetail',
        name: 'funddetail',
        component: () => import('@/views/fund/fundDetail.vue'),
    },
    {
        path: 'myfunddetail',
        name: 'myfunddetail',
        component: () => import('@/views/fund/myfundDetail.vue'),
    },
    {
        path: 'transcationdetail',
        name: 'transcationdetail',
        component: () => import('@/views/fund/transcationDetail.vue'),
    },
]