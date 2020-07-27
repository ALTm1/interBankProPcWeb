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
                path: 'funddetail',
                name: 'funddetail',
                component: () => import('@/views/fund/fundDetail.vue'),
            },
            
        ]
    },
]