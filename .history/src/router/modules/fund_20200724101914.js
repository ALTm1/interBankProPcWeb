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
            
        ]
        // 产品超市
    },
]