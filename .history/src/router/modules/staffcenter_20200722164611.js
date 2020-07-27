export default [
    {
        path: 'product',
        name: 'product',
        redirect: { name: 'productlist' },
        component: () => import('@/pages/staffCenter/groupproduct/product.vue'),
        meta: {
            title: '团购产品管理'
        },  
        children:[
            {
                path: 'productlist',
                name: 'productlist',
                component: () => import('@/pages/staffCenter/groupproduct/productList.vue'),
                meta: {
                    title: '团购产品管理'
                },  
            },
            {
                path: 'productdetail',
                name: 'productdetail',
                component: () => import('@/pages/staffCenter/groupproduct/productDetail.vue'),
                meta: {
                    title: '团购产品管理'
                },
            },
            {
                path: 'productdrop',
                name: 'productdrop',
                component: () => import('@/pages/staffCenter/groupproduct/productDrop.vue'),
                meta: {
                    title: '产品下架'
                },
            },
            {
                path: 'propublish',
                name: 'propublish',
                component: () => import('@/pages/staffCenter/groupproduct/proPublish.vue'),
                meta: {
                    title: '产品下架'
                },
            },
            
        ]
    },
    
]