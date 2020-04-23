const Layout = () => import(/* webpackChunkName: "Layout" */ '@/components/layout/Layout')

const staticRoute = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        component: Layout,
        children: [
            {
                path: '',
                name:'index',
                component: () => import(/* webpackChunkName: "index" */ '@/views/index/index'),
                meta: {title: '首页'}
            },
        ]
    },
    {
        path: '/',
        component: Layout,
        children: [

            /*银行*/
            {
                path: 'bank/list',   //银行列表
                name: 'bankList',
                component: () => import(/* webpackChunkName: "bankList" */ '@/views/bank/bankList'),
                meta: {title: '会员登记'},
            },
            {
                path: 'bank/details',   //银行列表
                name: 'bankDetails',
                component: () => import(/* webpackChunkName: "bankDetails" */ '@/views/bank/bankDetails'),
                meta: {title: '入场查询'},
            },
            /*贷款*/
            {
                path: 'loan/item',   //银行列表
                name: 'loanItem',
                component: () => import(/* webpackChunkName: "Receptionindex" */ '@/views/loan/loanItem'),
                meta: {title: '潜在会员'},
            },
            {
                path: 'loan/info',   //银行列表
                name: 'loanInfo',
                component: () => import(/* webpackChunkName: "Receptionindex" */ '@/views/loan/loanInfo'),
                meta: {title: '正式会员'},
            },
        ]
    },


];

export default staticRoute

