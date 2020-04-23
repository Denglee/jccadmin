let menu ={
    "status": 1,
    "info": "获取成功",
    "data": [
        {
            "id": "163",
            "pid": "0",
            "name": "前台",
            "app": "Admin",
            "controller": "bank",
            "action": "index",
            "parameter": "",
            "remark": "前台管理",
            "type": "1",
            "ajax": "0",
            "width": "0",
            "height": "0",
            "fonts": "el-icon-bank-card",  //icon
            "listorder": "100",
            "status": "1",
            "is_show": "0",
            "zmtek_ver": "0",
            "sub_menu": [
                {
                    "id": "164",
                    "action": "list",  //  路径2
                    "app": "Admin",
                    "controller": "bank",   //路径1
                    "pid": "163",
                    "parameter": "",
                    "type": "1",
                    "fonts": "icon-shangcheng3",
                    "ajax": "0",
                    "name": "会员登记"   //meta nama  显示在tag
                },
                {
                    "id": "165",
                    "action": "detail",
                    "app": "Admin",
                    "controller": "bank",
                    "pid": "163",
                    "parameter": "",
                    "type": "1",
                    "fonts": "desktop",
                    "ajax": "0",
                    "name": "入场查询"
                },
            ]
        },
        {
            "id": "147",
            "pid": "0",
            "name": "会员",
            "app": "Admin",
            "controller": "loan",
            "action": "index0",
            "parameter": "",
            "remark": "会员管理",
            "type": "1",
            "ajax": "0",
            "width": "0",
            "height": "0",
            "fonts": "el-icon-shopping-bag-1",    //icon
            "listorder": "95",
            "status": "1",
            "is_show": "0",
            "zmtek_ver": "0",
            "sub_menu": [
                {
                    "id": "148",
                    "action": "item",
                    "app": "Admin",
                    "controller": "loan",
                    "pid": "147",
                    "parameter": "",
                    "type": "1",
                    "fonts": "desktop",
                    "ajax": "0",
                    "name": "潜在会员"
                },
                {
                    "id": "170",
                    "action": "info",
                    "app": "Admin",
                    "controller": "loan",
                    "pid": "147",
                    "parameter": "",
                    "type": "1",
                    "fonts": "desktop",
                    "ajax": "0",
                    "name": "正式会员"
                },
            ]
        },
    ]
};

export {
    menu,
}