let userInfo = {
    loan_type: [
        //贷款类型
        {id: "loan_type1", name: 1, value: "信用贷款"},
        {id: "loan_type2", name: 2, value: "房抵贷款"},
        {id: "loan_type3", name: 3, value: "车抵贷款"},
    ],
    age: [
        //年龄
        {id: "min_age", name: 18, value: "最大年龄"},
        {id: "max_age", name: 75, value: "最小年龄"}
    ],
    hyzk: [
        //3、婚姻状况
        {id: "hyzk1", name: 1, value: "已婚"},
        {id: "hyzk2", name: 2, value: "未婚"},
        {id: "hyzk3", name: 3, value: "离异"},
        {id: "hyzk4", name: 4, value: "丧偶"}
    ],
    hj: [
        //4、户籍
        {id: "hj1", name: 1, value: "大陆"},
        {id: "hj2", name: 2, value: "港澳台"},
        {id: "hj3", name: 3, value: "外籍"}
    ],

    zylx: [
        //5.0、职业类型    新增
        {id: "zylx0", name: null, value: "不选"},
        {id: "zylx1", name: 1, value: "上班族"},
        {id: "zylx2", name: 2, value: "自雇(股东/其它)"}
    ],
    sb: [
        //5.1、社保    新增
        {id: "sb0", name: null, value: "不选"},
        {id: "sb1", name: 1, value: "有社保"},
        {id: "sb2", name: 2, value: "无社保"}
    ],
    gjj: [
        //5.1、公积金    新增
        {id: "gjj0", name: null, value: "不选"},
        {id: "gjj1", name: 1, value: "有公积金"},
        {id: "gjj2", name: 2, value: "无公积金"}
    ],
    clgsdq: [
        //5.2、车辆归属地区    新增
        {id: "clgsdq0", name: null, value: "不选"},
        {id: "clgsdq1", name: 1, value: "广东省"},
        {id: "clgsdq2", name: 2, value: "其他城市"}
    ],
    clzt: [
        //5.4、车辆状态    新增
        {id: "clzt0", name: null, value: "不选"},
        {id: "clzt1", name: 1, value: "按揭中"},
        {id: "clzt2", name: 2, value: "全款买车"}
    ],
    clzt2: [
        //5.41、车辆状态2    新增
        {id: "clzt20", name: null, value: "不选"},
        {id: "clzt21", name: 1, value: "按揭中"},
        {id: "clzt22", name: 2, value: "全款买车"},
        {id: "clzt23", name: 3, value: "无车"}
    ],
    fcxx: [
        //5.5、房产信息    新增
        {id: "fcxx0", name: null, value: "不选"},
        {id: "fcxx1", name: 1, value: "深圳房产"},
        {id: "fcxx2", name: 2, value: "全国"},
        {id: "fcxx3", name: 3, value: "无房产"}
    ],
    fczt: [
        //5.6、房产状态    新增
        {id: "fczt0", name: null, value: "不选"},
        {id: "fczt1", name: 1, value: "按揭中"},
        {id: "fczt2", name: 2, value: "按揭已结清"},
        {id: "fczt3", name: 3, value: "全款房"}
    ],
    bxbd: [
        //5.7、保险保单    新增
        {id: "bxbd0", name: null, value: "不选"},
        {id: "bxbd1", name: 1, value: "有商业保险"},
        {id: "bxbd2", name: 2, value: "无商业保险"}
    ],

    dwxz: [
        //5、单位性质
        // {id: "dwxz0", name: null, value: "不选"},
        {id: "dwxz1", name: 1, value: "普通企业"},
        {id: "dwxz2", name: 2, value: "公务员"},
        {id: "dwxz3", name: 3, value: "500强"},
        {id: "dwxz4", name: 4, value: "上市公司"},
        {id: "dwxz5", name: 5, value: "事业单位"},
        {id: "dwxz6", name: 6, value: "国企"}
    ],
    gzffxs: [
        //6、工资发放形式
        // {id: "gzffxs1", name: null, value: "不选"},
        {id: "gzffxs1", name: 1, value: "银行代发"},
        {id: "gzffxs2", name: 2, value: "固定转账"},
        {id: "gzffxs3", name: 3, value: "其它"}
    ],
    pjgz: [
        //7、平均工资
        {id: "pjgz0", name: null, value: "不选"},
        {id: "pjgz1", name: 1, value: "5000以内"},
        {id: "pjgz2", name: 2, value: "5000以上"},
        {id: "pjgz3", name: 3, value: "6000以上"},
        {id: "pjgz4", name: 4, value: "7000以上"},
        {id: "pjgz5", name: 5, value: "8000以上"}
    ],
    bdwgzsc: [
        //8、本单位工作时长f
        {id: "bdwgzsc0", name: null, value: "不选"},
        {id: "bdwgzsc1", name: 1, value: "3月内"},
        {id: "bdwgzsc2", name: 2, value: "3月以上"},
        {id: "bdwgzsc3", name: 3, value: "6月以上"},
        {id: "bdwgzsc4", name: 4, value: "1年以上"},
        {id: "bdwgzsc5", name: 5, value: "2年以上"}
    ],
    sbjs: [
        //9、社保基数
        {id: "sbjs0", name: null, value: "不选"},
        {id: "sbjs1", name: 1, value: "5000以内"},
        {id: "sbjs2", name: 2, value: "5000以上"},
        {id: "sbjs3", name: 3, value: "6000以上"},
        {id: "sbjs4", name: 4, value: "7000以上"},
        {id: "sbjs5", name: 5, value: "8000以上"}
    ],
    sb_jnsc: [
        //10、社保缴纳时长
        {id: "sb_jnsc0", name: null, value: "不选"},
        {id: "sb_jnsc1", name: 1, value: "3月以内"},
        {id: "sb_jnsc2", name: 2, value: "3月以上"},
        {id: "sb_jnsc3", name: 3, value: "6月以上"},
        {id: "sb_jnsc4", name: 4, value: "1年以上"},
        {id: "sb_jnsc5", name: 5, value: "2年以上"}
    ],
    sb_xdwjnsc: [
        //11、社保现单位缴纳时长
        {id: "sb_xdwjnsc0", name: null, value: "不选"},
        {id: "sb_xdwjnsc1", name: 1, value: "3月以内"},
        {id: "sb_xdwjnsc2", name: 2, value: "3月以上"},
        {id: "sb_xdwjnsc3", name: 3, value: "6月以上"},
        {id: "sb_xdwjnsc4", name: 4, value: "1年以上"},
        {id: "sb_xdwjnsc5", name: 5, value: "2年以上"}
    ],
    gjjjs: [
        //12、公积金基数
        {id: "gjjjs0", name: null, value: "不选"},
        {id: "gjjjs1", name: 1, value: "5000以内"},
        {id: "gjjjs2", name: 2, value: "5000以上"},
        {id: "gjjjs3", name: 3, value: "6000以上"},
        {id: "gjjjs4", name: 4, value: "7000以上"},
        {id: "gjjjs5", name: 5, value: "8000以上"}
    ],
    gjj_jnsc: [
        //13、公积金缴纳时长
        {id: "gjj_jnsc0", name: null, value: "不选"},
        {id: "gjj_jnsc1", name: 1, value: "3月以内"},
        {id: "gjj_jnsc2", name: 2, value: "3月以上"},
        {id: "gjj_jnsc3", name: 3, value: "6月以上"},
        {id: "gjj_jnsc4", name: 4, value: "1年以上"},
        {id: "gjj_jnsc5", name: 5, value: "2年以上"}
    ],
    gjj_xdwjnsc: [
        //14、公积金现单位缴纳时长
        {id: "gjj_xdwjnsc0", name: null, value: "不选"},
        {id: "gjj_xdwjnsc1", name: 1, value: "3月以内"},
        {id: "gjj_xdwjnsc2", name: 2, value: "3月以上"},
        {id: "gjj_xdwjnsc3", name: 3, value: "6月以上"},
        {id: "gjj_xdwjnsc4", name: 4, value: "1年以上"},
        {id: "gjj_xdwjnsc5", name: 5, value: "2年以上"}
    ],
    yyzznx: [
        //15、营业执照年限
        {id: "yyzznx0", name: null, value: "不选"},
        {id: "yyzznx1", name: 1, value: "未注册"},
        {id: "yyzznx2", name: 2, value: "3个月以内"},
        {id: "yyzznx3", name: 3, value: "3个月以上"},
        {id: "yyzznx4", name: 4, value: "6个月以上"},
        {id: "yyzznx5", name: 5, value: "一年以上"},
        {id: "yyzznx6", name: 6, value: "2年以上"}
    ],
    dwsfkc: [
        //16、单位是否考察
        {id: "dwsfkc0", name: null, value: "不选"},
        {id: "dwsfkc1", name: 0, value: "不能考察"},
        {id: "dwsfkc2", name: 1, value: "可以考察"}
    ],
    dgls: [
        //17、对公流水
        {id: "dgls0", name: null, value: "不选"},
        {id: "dgls1", name: 0, value: "无对公流水"},
        {id: "dgls2", name: 1, value: "有对公流水"}
    ],
    gskpje: [
        //18、公司开票金额
        {id: "gskpje0", name: null, value: "不选"},
        {id: "gskpje1", name: 1, value: "10万以下"},
        {id: "gskpje2", name: 2, value: "10万以上"},
        {id: "gskpje3", name: 3, value: "100万以上"},
        {id: "gskpje4", name: 4, value: "500万以上"}
    ],
    gsnsje: [
        //19、公司纳税金额
        {id: "gsnsje0", name: null, value: "不选"},
        {id: "gsnsje1", name: 1, value: "3万以内"},
        {id: "gsnsje2", name: 2, value: "3万以上"},
        {id: "gsnsje3", name: 3, value: "10万以上"},
        {id: "gsnsje4", name: 4, value: "50万以上"}
    ],
    sfyssqydd: [
        //19.111、是否有上市企业订单
        {id: "sfyssqydd0", name: null, value: "不选"},
        {id: "sfyssqydd1", name: 1, value: "没有"},
        {id: "sfyssqydd2", name: 2, value: "有"},
    ],
    sfgxjsqy: [
        //19.222、是否高新技术企业
        {id: "sfgxjsqy0", name: null, value: "不选"},
        {id: "sfgxjsqy1", name: 1, value: "是"},
        {id: "sfgxjsqy2", name: 2, value: "否"},
    ],
    fclx: [
        //20、房产类型
        // {id: "fclx0", name: null, value: "不选"},
        {id: "fclx1", name: 1, value: "住宅"},
        {id: "fclx2", name: 2, value: "商住两用"},
        {id: "fclx3", name: 3, value: "别墅"},
        {id: "fclx4", name: 4, value: "公寓"},
        {id: "fclx5", name: 5, value: "商铺（内）"},
        {id: "fclx6", name: 6, value: "商铺（外）"},
        {id: "fclx7", name: 7, value: "写字楼"},
        {id: "fclx8", name: 8, value: "厂房"},
        {id: "fclx9", name: 9, value: "小产权"},
        {id: "fclx10", name: 10, value: "军产房"},
        {id: "fclx11", name: 11, value: "自建农民房"},
        {id: "fclx12", name: 12, value: "双拼房"},
        {id: "fclx13", name: 13, value: "公司房"},
        {id: "fclx14", name: 14, value: "综合楼"},
        {id: "fclx15", name: 15, value: "福利房"},
        {id: "fclx16", name: 16, value: "单身宿舍"},
        {id: "fclx17", name: 17, value: "单身公寓"}
    ],
    ajz: [
        //21、按揭中（月供时间）
        {id: "ajz0", name: null, value: "不选"},
        {id: "ajz1", name: 1, value: "3月以内"},
        {id: "ajz2", name: 2, value: "3月以上"},
        {id: "ajz3", name: 3, value: "6月以上"},
        {id: "ajz4", name: 4, value: "1年以上"},
        {id: "ajz5", name: 5, value: "2年以上"}
    ],
    ajjq: [
        //22、按揭结清（结清时间）
        {id: "ajjq0", name: null, value: "不选"},
        {id: "ajjq1", name: 1, value: "3月以内"},
        {id: "ajjq2", name: 2, value: "3月以上"},
        {id: "ajjq3", name: 3, value: "6月以上"},
        {id: "ajjq4", name: 4, value: "1年以上"},
        {id: "ajjq5", name: 5, value: "2年以上"}
    ],
    qkf: [
        //23、全款房（过户时间）
        {id: "qkf0", name: null, value: "不选"},
        {id: "qkf1", name: 1, value: "3月以内"},
        {id: "qkf2", name: 2, value: "3月以上"},
        {id: "qkf3", name: 3, value: "6月以上"},
        {id: "qkf4", name: 4, value: "1年以上"},
        {id: "qkf5", name: 5, value: "2年以上"}
    ],
    fl: [
        //24、房龄
        {id: "fl0", name: null, value: "不选"},
        {id: "fl1", name: 1, value: "1~30"},
        {id: "fl2", name: 2, value: "30~35"},
        {id: "fl3", name: 3, value: "35~50"}
    ],
    ajc: [
        //25、按揭车（按揭时间）
        {id: "ajc0", name: null, value: "不选"},
        {id: "ajc1", name: 1, value: "6个月以内"},
        {id: "ajc2", name: 2, value: "6个月以上"},
        {id: "ajc3", name: 3, value: "1年以上"}
    ],
    qkc: [
        //26、全款车（按揭结清或过户时间）
        {id: "qkc0", name: null, value: "不选"},
        {id: "qkc1", name: 1, value: "6个月以内"},
        {id: "qkc2", name: 2, value: "6个月以上"},
        {id: "qkc3", name: 3, value: "1年以上"}
    ],
    clsyc: [
        //27、车辆所有权
        {id: "clsyc0", name: null, value: "不选"},
        {id: "clsyc1", name: 1, value: "本人"},
        {id: "clsyc2", name: 2, value: "配偶"},
        {id: "clsyc3", name: 3, value: "公司"}
    ],
    clxz: [
        //28、车辆性质
        {id: "clxz0", name: null, value: "不选"},
        {id: "clxz1", name: 1, value: "非运营"},
        {id: "clxz2", name: 2, value: "运营"}
    ],
    clczsj: [
        //29、车辆持证时间
        {id: "clczsj0", name: null, value: "不选"},
        {id: "clczsj1", name: 1, value: "3个月以内"},
        {id: "clczsj2", name: 2, value: "3~6个月"},
        {id: "clczsj3", name: 3, value: "6个月以上"}
    ],
    clgsd: [
        //30、车辆归属地
        {id: "clgsd0", name: null, value: "不选"},
        {id: "clgsd1", name: 1, value: "粤A广州"},
        {id: "clgsd2", name: 2, value: "粤B深圳"},
        {id: "clgsd3", name: 3, value: "粤C珠海"},
        {id: "clgsd4", name: 4, value: "粤D汕头"},
        {id: "clgsd5", name: 5, value: "粤E佛山"},
        {id: "clgsd6", name: 6, value: "粤F韶关"},
        {id: "clgsd7", name: 7, value: "粤G湛江"},
        {id: "clgsd8", name: 8, value: "粤H肇庆"},
        {id: "clgsd9", name: 9, value: "粤J江门"},
        {id: "clgsd10", name: 10, value: "粤K茂名"},
        {id: "clgsd11", name: 11, value: "粤L惠州"},
        {id: "clgsd12", name: 12, value: "粤M梅州"},
        {id: "clgsd13", name: 13, value: "粤N汕尾"},
        {id: "clgsd14", name: 14, value: "粤P河源"},
        {id: "clgsd15", name: 15, value: "粤Q阳江"},
        {id: "clgsd16", name: 16, value: "粤R清远"},
        {id: "clgsd17", name: "17", value: "粤S东莞"},
        {id: "clgsd18", name: "18", value: "粤T中山"},
        {id: "clgsd19", name: "19", value: "粤U潮州"},
        {id: "clgsd20", name: "20", value: "粤V揭阳"},
        {id: "clgsd21", name: "21", value: "粤W云浮"},
        {id: "clgsd22", name: "22", value: "粤X顺德"},
        {id: "clgsd23", name: "23", value: "粤Y南海"},
        {id: "clgsd24", name: "24", value: "粤Z  港澳"}
    ],
    cl: [
        //31、车龄
        {id: "cl0", name: null, value: "不选"},
        {id: "cl1", name: 1, value: "2年"},
        {id: "cl2", name: 2, value: "5年"},
        {id: "cl3", name: 3, value: "8年"},
        {id: "cl4", name: 4, value: "10年"},
        {id: "cl5", name: 5, value: "10年以上"}
    ],
    jqxsyyxq: [
        //32、交强险剩余有效期
        {id: "jqxsyyxq0", name: null, value: "不选"},
        {id: "jqxsyyxq1", name: 1, value: "3个月以内"},
        {id: "jqxsyyxq2", name: 2, value: "6个月以内"},
        {id: "jqxsyyxq3", name: 3, value: "12个月以内"}
    ],
    xsgls: [
        //33、行驶公里数
        {id: "xsgls0", name: null, value: "不选"},
        {id: "xsgls1", name: 1, value: "5万公里"},
        {id: "xsgls2", name: 2, value: "10万公里"},
        {id: "xsgls3", name: 3, value: "15万公里"},
        {id: "xsgls4", name: 4, value: "20万公里"},
        {id: "xsgls5", name: 5, value: "20万公里以上"}
    ],
    syxsyyxq: [
        //33、商业险剩余有效期
        {id: "syxsyyxq0", name: null, value: "不选"},
        {id: "syxsyyxq1", name: 1, value: "3个月以内"},
        {id: "syxsyyxq2", name: 2, value: "6个月以内"},
        {id: "syxsyyxq3", name: 3, value: "12个月以内"}
    ],
    bxlx: [
        //35、保险类型
        {id: "bxlx0", name: null, value: "不选"},
        {id: "bxlx1", name: 1, value: "平安保险"},
        {id: "bxlx2", name: 2, value: "新华保险"},
        {id: "bxlx3", name: 3, value: "人寿保险"},
        {id: "bxlx4", name: 4, value: "康泰保险"},
        {id: "bxlx5", name: 5, value: "太平洋保险"},
        {id: "bxlx6", name: 6, value: "阳光保险"},
        {id: "bxlx7", name: 7, value: "富德保险"},
        {id: "bxlx8", name: 8, value: "友邦保险"},
        {id: "bxlx9", name: 9, value: "中美联泰"},
        {id: "bxlx10", name: 10, value: "工银安联"},
        {id: "bxlx11", name: 11, value: "中德安联"},
        {id: "bxlx12", name: 12, value: "民生保险"},
        {id: "bxlx13", name: 13, value: "天安保险"},
        {id: "bxlx14", name: 14, value: "华夏保险"},
        {id: "bxlx15", name: 15, value: "中邮保险"},
        {id: "bxlx16", name: 16, value: "其它"}
    ],
    bxjnfs: [
        //36、保险缴纳方式
        {id: "bxjnfs0", name: null, value: "不选"},
        {id: "bxjnfs1", name: 1, value: "年缴"},
        {id: "bxjnfs2", name: 2, value: "季缴"},
        {id: "bxjnfs3", name: 3, value: "月缴"},
        {id: "bxjnfs4", name: 4, value: "趸缴"}
    ],
    bxjfsj: [
        //37、保险缴费时间
        {id: "bxjfsj0", name: null, value: "不选"},
        {id: "bxjfsj1", name: 1, value: "6个月以内"},
        {id: "bxjfsj2", name: 2, value: "6个月以上"},
        {id: "bxjfsj3", name: 3, value: "1年以上"},
        {id: "bxjfsj4", name: 4, value: "2年以上"}
    ],

    dqxebs: [
        //43、当前小额笔数
        {id: "dqxebs0", name: null, value: "不选"},
        {id: "dqxebs1", name: 1, value: "无"},
        {id: "dqxebs2", name: 2, value: "1笔"},
        {id: "dqxebs3", name: 3, value: "2笔"},
        {id: "dqxebs4", name: 4, value: "3笔"},
        {id: "dqxebs5", name: 5, value: "4笔"},
        {id: "dqxebs6", name: 6, value: "更多"}
    ],
    dqxfjrbs: [
        //44、当前消费金融笔数
        {id: "dqxfjrbs0", name: null, value: "不选"},
        {id: "dqxfjrbs1", name: 1, value: "无"},
        {id: "dqxfjrbs2", name: 2, value: "1笔"},
        {id: "dqxfjrbs3", name: 3, value: "2笔"},
        {id: "dqxfjrbs4", name: 4, value: "3笔"},
        {id: "dqxfjrbs5", name: 5, value: "4笔"},
        {id: "dqxfjrbs6", name: 6, value: "更多"}
    ],
    sfczyc: [
        //45、贷款/信用卡是否存在止付；呆账；关注等异常
        {id: "sfczyc0", name: null, value: "不选"},
        {id: "sfczyc1", name: 0, value: "无"},
        {id: "sfczyc2", name: 1, value: "有"}
    ],
    dqyqed: [
        //46、当前逾期额度
        {id: "dqyqed0", name: null, value: "不选"},
        {id: "dqyqed1", name: 1, value: "无逾期"},
        {id: "dqyqed2", name: 2, value: "1000元以内"},
        {id: "dqyqed3", name: 3, value: "1000元以上"},
        {id: "dqyqed4", name: 4, value: "3000元以上"},
        {id: "dqyqed5", name: 5, value: "5000元以上"},
        {id: "dqyqed6", name: 6, value: "1万元以上"}
    ],
    bnn_wyq: [
        //47、近半年内有无逾期
        // {id: "bnn_wyq0", name: null, value: "不选"},
        {id: "bnn_wyq1", name: -1, value: "无逾期"},
        {id: "bnn_wyq2", name: 1, value: "有逾期"}
    ],

    ynn_wyq: [
        //52、近一年内有无逾期 ynn_wyq:  0：无逾期；1：后台默认是有逾期
        // {id: "ynn_wyq0", name: null, value: "不选"},
        {id: "ynn_wyq1", name: -1, value: "无逾期"},
        {id: "ynn_wyq2", name: 1, value: "有逾期"}
    ],

    lnn_wyq: [
        //57、近两年内有无逾期 lnn_wyq:  0：无逾期；1：后台默认是有逾期
        // {id: "lnn_wyq0", name: null, value: "不选"},
        {id: "lnn_wyq1", name: -1, value: "无逾期"},
        {id: "lnn_wyq2", name: 1, value: "有逾期"}
    ],

    sfsygwld: [
        //62、是否使用过微粒贷
        {id: "sfsygwld0", name: null, value: "不选"},
        {id: "sfsygwld1", name: 0, value: "没有"},
        {id: "sfsygwld2", name: 1, value: "有"}
    ],

    loan_time_limit: [    // 放款时效
        {id: "loan_time_limit0", name: null, value: "不选"},
        {id: "loan_time_limit1", name: 0, value: "当天放款"},
        {id: "loan_time_limit2", name: 1, value: "1~3天"},
        {id: "loan_time_limit3", name: 2, value: "七天内"},
    ],

    loan_mode: [ //还款方式
        {id: "loan_mode0", name: null, value: "不选"},
        {id: "loan_mode1", name: 0, value: "等额本息还款"},
        {id: "loan_mode2", name: 1, value: "等额本金还款"},
        {id: "loan_mode3", name: 2, value: "等额等息还款"},
        {id: "loan_mode4", name: 3, value: "先息后本还款"},
        {id: "loan_mode5", name: 4, value: "到期还本付息"},
        {id: "loan_mode6", name: 5, value: "气球贷还款"},
    ],
    loan_type_detail:[
        {id: "loan_type_detail1", name: 1, value: "个人信用贷款"},
        {id: "loan_type_detail2", name: 2, value: "企业信用贷款"},
        {id: "loan_type_detail3", name: 3, value: "个人抵押贷款"},
        {id: "loan_type_detail4", name: 4, value: "企业抵押贷款"},
    ],


    /*

  36.保险缴纳方式 bxjnfs:  1、年缴；2、季缴；3、月缴；4、趸缴
  37.保险缴费时间 bxjfsj: 1、6个月以内；2、6个月以上；3、1年以上；4、2年以上
  38.一个月内查询次数 ygyncxcs:  输入次数
  39.两个月内查询次数 lgyncxcs: 输入次数
  40.三个月内查询次数 sgyncxcs: 输入次数
  41.六个月内查询次数 liugyncxcs: 输入次数
  42.十二个月内查询次数 segyncxcs: 输入次数
  43.当前小额笔数 dqxebs: 1、无；2、1笔；3、2笔；4、3笔；5、4笔；6、更多
  44.当前消费金融笔数 dqxfjrbs: 1、无；2、1笔；3、2笔；4、3笔；5、4笔；6、更多
  45.贷款/信用卡是否存在止付；呆账；关注等异常 sfczyc:  0、无；1、有
  46.当前逾期额度 dqyqed:  1、无逾期；2、1000元以内；3、1000元以上；4、3000元以上；5、5000元以上；6、1万元以上
  47.近半年内有无逾期 bnn_wyq:   0：无逾期；1：后台默认是有逾期

  48.近半年内逾期一个月次数 bnn_yqygycs: 当选择了无逾期则不可输入
  49.近半年内逾期两个月次数 bnn_yqlgycs: 当选择了无逾期则不可输入
  50.近半年内逾期三个月次数 bnn_yqsgycs: 当选择了无逾期则不可输入
  51.近半年内逾期四个月次数 bnn_yqsigycs: 当选择了无逾期则不可输入
  52.近一年内有无逾期 ynn_wyq:  0：无逾期；1：后台默认是有逾期
  53.近一年内逾期一个月次数 ynn_yqygycs: 当选择了无逾期则不可输入
  54.近一年内逾期两个月次数 ynn_yqlgycs: 当选择了无逾期则不可输入
  55.近一年内逾期三个月次数 ynn_yqsgycs: 当选择了无逾期则不可输入
  56.近一年内逾期四个月次数 ynn_yqsigycs: 当选择了无逾期则不可输入
  57.近两年内有无逾期 lnn_wyq: 0：无逾期；1：后台默认是有逾期
  58.近两年内逾期一个月次数 lnn_yqygycs: 当选择了无逾期则不可输入
  59.近两年内逾期两个月次数 lnn_yqlgycs: 当选择了无逾期则不可输入
  60.近两年内逾期三个月次数 lnn_yqsgycs: 当选择了无逾期则不可输入
  61.近两年内逾期四个月次数 lnn_yqsigycs: 当选择了无逾期则不可输入
  62.是否使用过微粒贷 sfsygwld: 0、没有；1、有
  * */

    /*
  1. 最小年龄 min_age：
  2. 最大年龄 max_age:
  3. 婚姻状况 hyzk：1、已婚；2、未婚；3、离异；4、丧偶
  4. 户籍 hj: 1、大陆；2、港澳台；3、外籍
  5. 单位性质 dwxz: 1、普通企业；2、公务员；3、500强；4、上市公司；5、事业单位；6、国企
  6. 工资发放形式 gzffxs: 1、银行代发；2、固定转账；3、其它
  7. 平均工资 pjgz:  1、5000以内；2、5000以上；3、6000以上；4、7000以上；5、8000以上
  8. 本单位工作时长 bdwgzsc:  1、3月内；2、3月以上；3、6月以上；4、1年以上；4、2年以上
  9. 社保基数 sbjs: 1、5000以内；2、5000以上；3、6000以上；4、7000以上；5、8000以上
  10. 社保缴纳时长 sb_jnsc: 1、3月以内；2、3月以上；3、6月以上；4、1年以上；4、2年以上
  11. 社保现单位缴纳时长 sb_xdwjnsc: 1、3月以内；2、3月以上；3、6月以上；4、1年以上；4、2年以上
  12. 公积金基数 gjjjs: 1、5000以内；2、5000以上；3、6000以上；4、7000以上；5、8000以上
  13. 公积金缴纳时长 gjj_jnsc: 1、3月以内；2、3月以上；3、6月以上；4、1年以上；4、2年以上
  14. 公积金现单位缴纳时长 gjj_xdwjnsc: 1、3月以内；2、3月以上；3、6月以上；4、1年以上；4、2年以上
  15.营业执照年限 yyzznx: 1、未注册；2、3个月以内；3、3个月以上；4、6个月以上
  16.单位是否考察 dwsfkc:   0、不能考察；1、可以考察
  17.对公流水 dgls:  0、无对公流水；1、有对公流水
  18.公司开票金额 gskpje:  1、10万以下；2、10万以上；3、100万以上；4、500万以上
  19.公司纳税金额 gsnsje:  1、3万以内；2、3万以上；3、10万以上；4、50万以上
  20.房产类型 fclx: 1、住宅；2、商住两用；3、别墅；4、公寓；5、商铺（内）；6、商铺（外）；7、写字楼；8、厂房；
  9、小产权；10、军产房；11、自建农民房；12、双拼房；13、公司房；14、综合楼；15、福利房；16、单身宿舍；17、单身公寓
  21.按揭中（月供时间） ajz:  1、3月以内；2、3月以上；3、6月以上；4、1年以上；5、2年以上
  22.按揭结清（结清时间） ajjq: 1、3月以内；2、3月以上；3、6月以上；4、1年以上；5、2年以上
  23.全款房（过户时间） qkf: 1、3月以内；2、3月以上；3、6月以上；4、1年以上；5、2年以上
  24.房龄 fl: 1、1~30；2、30~35；3、35~50
  25.按揭车（按揭时间） ajc: 1、6个月以内；2、6个月以上；3、1年以上
  26.全款车（按揭结清或过户时间） qkc: 1、6个月以内；2、6个月以上；3、1年以上
  27.车辆所有权 clsyc:  1、本人；2、配偶；3、公司
  28.车辆性质 clxz: 0、非运营；1、运营
  29.车辆持证时间 clczsj: 1、3个月以内；2、3~6个月；3、6个月以上
  30.车辆归属地 clgsd: 1、粤A广州；2、粤B深圳；3、粤C珠海；4、粤D汕头；5、粤E佛山；6、粤F韶关；7、粤G湛江；8、粤H肇庆；9、粤J江门；10、粤K茂名；
  11、粤L惠州；12、粤M梅州；13、粤N汕尾；14、粤P河源；15、粤Q阳江；16、粤R清远；17、粤S东莞；18、粤T中山；19、粤U潮州；20、粤V揭阳；21、粤W云浮；
  22、粤X顺德；23、粤Y南海；24、粤Z港澳；
  31.车龄 cl: 1、2年；2、5年；3、8年；4、10年；5、10年以上
  32.交强险剩余有效期 jqxsyyxq:  1、3个月以内；2、6个月以内；3、12个月以内
  33.行驶公里数 xsgls: 1、5万公里；2、10万公里；3、15万公里；4、20万公里；5、20万公里以上
  34.商业险剩余有效期 syxsyyxq: 1、3个月以内；2、6个月以内；3、12个月以内
  35.保险类型 bxlx: 1、平安保险；2、新华保险；3、人寿保险；4、康泰保险；5、太平洋保险；6、阳光保险；7、富德保险；8、友邦保险；9、中美联泰；
  10、工银安联；11、中德安联；12、民生保险；13、天安保险；14、华夏保险；15、中邮保险；16、其它
  */
};

export {userInfo};
