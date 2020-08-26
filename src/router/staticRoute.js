const Layout = () =>
  import(/* webpackChunkName: "Layout" */ "@/components/layout/Layout");

const staticRoute = [
  {
    path: "/",
    redirect: "/loan/list"
  },
  // {
  //   path: "/index",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "",
  //       name: "index",
  //       component: () =>
  //         import(/* webpackChunkName: "index" */ "@/views/Index/index"),
  //       meta: { title: "首页" }
  //     }
  //   ]
  // },
  {
    path: "/",
    component: Layout,
    children: [
      /*银行*/
      {
        path: "bank/list", //银行列表
        name: "bankList",
        component: () =>
          import(/* webpackChunkName: "bankList" */ "@/views/Bank/bankList"),
        meta: { title: "银行列表" }
      },
      {
        path: "bank/details", //银行详情
        name: "bankDetails",
        component: () =>
          import(
            /* webpackChunkName: "bankDetails" */ "@/views/Bank/bankDetails"
          ),
        meta: { title: "银行详情" }
      },

      /*贷款*/
      {
        path: "loan/list", //贷款列表
        name: "loanItem",
        component: () =>
          import(/* webpackChunkName: "loanItem" */ "@/views/Loan/loanItem"),
        meta: { title: "列表" }
      },
      // {
      //   path: "loan/info", //贷款详情
      //   name: "loanInfo",
      //   component: () =>
      //     import(/* webpackChunkName: "loanInfo" */ "@/views/Loan/loanInfo"),
      //   meta: { title: "贷款详情" }
      // },

      {
        path: "match/matchIndex", //匹配
        name: "matchIndex",
        component: () =>
            import(/* webpackChunkName: "matchIndex" */ "@/views/match/matchIndex"),
        meta: { title: "匹配" }
      },
      // {
      //   path: "match/matchCompare", //匹配对比
      //   name: "matchCompare",
      //   component: () =>
      //       import(/* webpackChunkName: "matchCompare" */ "@/views/match/matchCompare"),
      //   meta: { title: "匹配对比" }
      // }

    ]
  }
];

export default staticRoute;
