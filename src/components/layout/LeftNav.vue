<template>
    <aside class="layoutLeft-nav">
        <!--logo-->
        <div class="img-logoBox" @click="goIndex()">
            <img :src='logo'
                 alt=""
                 class="img-logo"
            />
            <!--<img class="img-logo" :src='localUrl+"/"+UserInfo.logo' alt="">-->
        </div>
        <el-menu
                class="Menu-LeftNav-Box"
                :collapse="isCollapse"
                background-color="#253954"
                text-color="#fff"
                active-text-color="#fff"
                default-active="this.$route.path"
        >
            <!--一级导航-->
            <el-submenu
                    class="sunmenu-box"
                    popper-class="Menu-LeftNav"
                    :index="index1 + ''"
                    v-for="(navItem, index1) in menu.data"
                    :key="index1"
            >
                <template slot="title">
                    <!--<i class="iconfont" :class="navItem.fonts"></i>-->
                    <i :class="navItem.fonts"></i>

                    <span slot="title">{{ navItem.name }}</span>
                </template>

                <!--二级导航 数据-->
                <el-menu-item-group
                        v-for="(subItems, index2) in navItem.sub_menu"
                        :key="index2"
                >
                    <el-menu-item v-if="subItems.action == ''"></el-menu-item>
                    <el-menu-item
                            v-else
                            :index="index1 + '' + '-' + index2 + ''"
                            :dataIndex2="index1 + '' + '-' + index2 + ''"
                    >
                        <router-link
                                :to="{ path: '/' + subItems.controller + '/' + subItems.action }"
                                :dataPath="subItems.controller + '/' + subItems.action"
                        >
                            {{ subItems.name }}
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </aside>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import {menu} from "@/assets/js/menu"; /*引用 用户信息 */
    //  import {ApiLayoutNav} from "@/assets/js/api"
    export default {
        name: "LeftNav",
        data() {
            return {
                logo:require('@/assets/img/LOGO.png'),
                localUrl: this.GLOBAL.localUrl,
                isCollapse: true,
                menu: menu
            };
        },

        methods: {
            //store 里 StoreTagNav中 actions 的getNavList方法  获取左侧路由导航
            ...mapActions({
                getNavList: "StoreTagNav/actNavList"
            }),

            /*获取侧边导航数据*/
            getNavObj() {
                ApiLayoutNav()
                    .then(res => {
                        if (res.status == 1) {
                            this.getNavList(res); //数据传到store
                        }
                        if (res.status == 0) {
                            this.$message({
                                message: res.info,
                                type: "error",
                                duration: 1500,
                                offset: 40
                            });
                            setTimeout(() => {
                                this.$router.replace({path: "/login"});
                            }, 1500);
                        }
                    })
                    .catch(res => {
                        console.log(res);
                    });
            },

            /*回到首页*/
            goIndex() {
                this.$router.push({path: "/index"});
            },

            goNext(e) {
                console.log(e);
                let trainerId = e.currentTarget.dataset.datanum;
                console.log(`${trainerId}`);
                this.dataNum = trainerId;
                // this.$routerConfigure.push({path:trainerId});
            }
        },

        created() {
            // this.getNavObj();
        },
        computed: {
            //获取 store 中 StoreTagNav。js 的 gState 页面通过{{gState}}直接用
            ...mapGetters({
                StateNavList: "StoreTagNav/getNavList",
                UserInfo: "StoreTagNav/getsUserInfo"
            })
        }
    };
</script>
