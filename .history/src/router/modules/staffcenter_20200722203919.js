export default [
    {
        path: 'product',
        name: 'product',
        redirect: { name: 'productlist' },
        component: () => import('@/views/staffCenter/groupproduct/product.vue'),
        meta: {
            title: '团购产品管理'
        },  
        children:[
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
    }
    
]