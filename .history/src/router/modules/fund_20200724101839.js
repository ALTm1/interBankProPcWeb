export default [
    {
        path: 'fund',
        name: 'fund',
        // fundproduct
        component: () => import('@/views/fund/fund.vue'),
        meta: {
            title: '基金通'
        },
        // 产品超市
    },
]