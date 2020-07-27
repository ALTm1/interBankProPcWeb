export default [
    {
        path: 'product',
        name: 'product',
        redirect: { name: 'productlist' },
        component: () => import('@/views/staffCenter/groupproduct/product.vue'),
        meta: {
            title: '团购产品管理'
        },
        children: [
            {
                path: 'productlist',
                name: 'productlist',
                component: () => import('@/views/staffCenter/groupproduct/productList.vue'),
                meta: {
                    title: '团购产品管理'
                },
            },
            {
                path: 'productdetail',
                name: 'productdetail',
                component: () => import('@/views/staffCenter/groupproduct/productDetail.vue'),
                meta: {
                    title: '团购产品管理'
                },
            },
            {
                path: 'publishsucc',
                name: 'publishsucc',
                component: () => import('@/views/staffCenter/groupproduct/publishSucc.vue'),
                meta: {
                    title: '产品发布'
                },
            },

            {
                path: 'productdrop',
                name: 'productdrop',
                component: () => import('@/views/staffCenter/groupproduct/productDrop.vue'),
                meta: {
                    title: '产品下架'
                },
            },
            {
                path: 'propublish',
                name: 'propublish',
                component: () => import('@/views/staffCenter/groupproduct/proPublish.vue'),
                meta: {
                    title: '产品下架'
                },
            },

        ]
    },
    {
        path: 'file',
        name: 'file',
        // redirect: { name: 'productlist' },
        component: () => import('@/views/staffCenter/fileDownload/file.vue'),
    },
    {
        path: 'league',
        name: 'league',
        redirect: { name: 'leagueList' },
        component: () => import('@/views/staffCenter/league/league.vue'),
        children: [
            {
                path: 'leagueList',
                name: 'leagueList',
                component: () => import('@/views/staffCenter/league/leagueList.vue'),
            },
            {
                path: 'leaguedetail',
                name: 'leaguedetail',
                component: () => import('@/views/staffCenter/league/leagueDetail.vue'),
            },
            
        ]
    },
    {
        path: 'approval',
        name: 'approval',
        redirect: { name: 'approvallist' },
        component: () => import('@/views/staffCenter/approval/approval.vue'),
        children: [
            {
                path: 'approvallist',
                name: 'approvallist',
                component: () => import('@/views/staffCenter/approval/approvalList.vue'),
            },
            {
                path: 'approvaldetail',
                name: 'approvaletail',
                component: () => import('@/views/staffCenter/approval/approvalDetail.vue'),
            },
            {
                path: 'approvalsuccess',
                name: 'approvalsuccess',
                component: () => import('@/views/staffCenter/approval/approvalSucc.vue'),
            },
        ]
    },
]   