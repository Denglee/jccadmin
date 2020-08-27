<template>
    <div class="layoutR-contain animated fadeIn">
        <div class="btnNav-contain">
            <navRefush :btnBack="btnLoad.btnBack" class="btnNav-left" @SecondBack="BtnSecondBack"></navRefush>
        </div>
        <div class="bgWhite-public bg-orderInfo">

            <header class="index-item-title">订单匹配</header>
            <div class="bgWhite-padd20">

                <el-form ref="form" :model="userChecked" label-width="180px">
                    <!--基本+社保-->
                    <div class="compare-form">
                        <!-- 0501 单选 demo-->
                        <el-form-item label="申请贷款类型">
                            <el-radio-group v-model="userChecked.loan_type" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.loan_type" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="贷款类型">
                            <el-radio-group v-model="userChecked.loan_type_detail" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.loan_type_detail" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <!--0502 输入框 demo-->
                        <!--<el-form-item label="融资总额">
                            <el-input  type="number" clearable v-model="userChecked.total_financing" placeholder="例如：10"></el-input>
                        </el-form-item>-->

                        <el-form-item label="最小年龄">
                            <el-input  type="number" clearable  v-model="userChecked.min_age" placeholder="例如：18"></el-input>
                        </el-form-item>

                        <el-form-item label="最大年龄">
                            <el-input  type="number" clearable  v-model="userChecked.max_age" placeholder="例如：60"></el-input>
                        </el-form-item>

                        <!-- 0503 多选demo-->
                        <el-form-item label="婚姻状况">
                            <el-checkbox-group v-model="checkedArr2.hyzk">
                                <el-checkbox v-for="(item,index) in userInfo.hyzk" :key="index" :label="item.name" name="item.id">
                                    {{item.value}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="户籍">
                            <el-checkbox-group v-model="checkedArr2.hj">
                                <el-checkbox v-for="(item,index) in userInfo.hj" :key="index" :label="item.name">
                                    {{item.value}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="单位性质">
                            <el-radio-group v-model="userChecked.dwxz" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.dwxz" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="工资发放形式">
                            <el-radio-group v-model="userChecked.gzffxs" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.gzffxs" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="平均工资">
                            <el-radio-group v-model="userChecked.pjgz" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.pjgz" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="本单位工作时长">
                            <el-radio-group v-model="userChecked.bdwgzsc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.bdwgzsc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="社保基数">
                            <el-radio-group v-model="userChecked.sbjs" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.sbjs" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="社保缴纳时长">
                            <el-radio-group v-model="userChecked.sb_jnsc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.sb_jnsc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="社保现单位缴纳时长">
                            <el-radio-group v-model="userChecked.sb_xdwjnsc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.sb_xdwjnsc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="公积金基数">
                            <el-radio-group v-model="userChecked.gjjjs" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.gjjjs" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="公积金缴纳时长">
                            <el-radio-group v-model="userChecked.gjj_jnsc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.gjj_jnsc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="公积金现单位缴纳时长">
                            <el-radio-group v-model="userChecked.gjj_xdwjnsc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.gjj_xdwjnsc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="营业执照年限">
                            <el-radio-group v-model="userChecked.yyzznx" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.yyzznx" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="单位是否考察">
                            <el-radio-group v-model="userChecked.dwsfkc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.dwsfkc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="对公流水">
                            <el-radio-group v-model="userChecked.dgls" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.dgls" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="公司开票金额">
                            <el-radio-group v-model="userChecked.gskpje" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.gskpje" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="是否有上市企业订单">
                            <el-radio-group v-model="userChecked.sfyssqydd" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.sfyssqydd" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="是否高新技术企业">
                            <el-radio-group v-model="userChecked.sfgxjsqy" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.sfgxjsqy" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="公司纳税金额">
                            <el-radio-group v-model="userChecked.gsnsje" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.gsnsje" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                    </div>

                    <!--房产-->
                    <div class="compare-form">
                        <el-form-item label="房产类型">
                            <el-checkbox-group v-model="checkedArr2.fclx">
                                <el-checkbox v-for="(item,index) in userInfo.fclx" :key="index" :label="item.name">
                                    {{item.value}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="按揭中（月供时间）">
                            <el-radio-group v-model="userChecked.ajz" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.ajz" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="按揭结清（结清时间）">
                            <el-radio-group v-model="userChecked.ajjq" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.ajjq" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="全款房（过户时间）">
                            <el-radio-group v-model="userChecked.qkf" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.qkf" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="最小房龄" class="width-inlineLabel">
                            <el-input  type="number" clearable  v-model="userChecked.min_fl" placeholder="例如：2"></el-input>
                        </el-form-item>

                        <el-form-item label="最大房龄" class="width-inlineLabel">
                            <el-input  type="number" clearable  v-model="userChecked.max_fl" placeholder="例如：60"></el-input>
                        </el-form-item>
                    </div>

                    <!--车辆-->
                    <div class="compare-form">
                        <el-form-item label="按揭车（按揭时间）">
                            <el-radio-group v-model="userChecked.ajc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.ajc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="全款车（按揭结清或过户时间）">
                            <el-radio-group v-model="userChecked.qkc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.qkc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="车辆所有权">
                            <el-radio-group v-model="userChecked.clsyc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.clsyc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="车辆性质">
                            <el-radio-group v-model="userChecked.clxz" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.clxz" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="车辆持证时间">
                            <el-radio-group v-model="userChecked.clczsj" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.clczsj" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="车辆归属地">
                            <el-radio-group v-model="userChecked.clgsd" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.clgsd" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="车龄">
                            <el-radio-group v-model="userChecked.cl" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.cl" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="交强险剩余有效期">
                            <el-radio-group v-model="userChecked.jqxsyyxq" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.jqxsyyxq" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="行驶公里数">
                            <el-radio-group v-model="userChecked.xsgls" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.xsgls" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="商业险剩余有效期">
                            <el-radio-group v-model="userChecked.syxsyyxq" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.syxsyyxq" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="保险类型">
                            <el-radio-group v-model="userChecked.bxlx" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.bxlx" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="保险缴纳方式">
                            <el-radio-group v-model="userChecked.bxjnfs" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.bxjnfs" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="保险缴费时间">
                            <el-radio-group v-model="userChecked.bxjfsj" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.bxjfsj" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>

                    <!--逾期-->
                    <div class="compare-form">
                        <el-form-item label="一个月内查询次数" class="width-inlineLabel">
                            <el-input  type="number" clearable  v-model="userChecked.ygyncxcs" placeholder="例如：1"></el-input>
                        </el-form-item>

                        <el-form-item label="两个月内查询次数" class="width-inlineLabel">
                            <el-input  type="number" clearable  v-model="userChecked.lgyncxcs" placeholder="例如：1"></el-input>
                        </el-form-item>

                        <el-form-item label="三个月内查询次数" class="width-inlineLabel">
                            <el-input  type="number" clearable  v-model="userChecked.sgyncxcs" placeholder="例如：1"></el-input>
                        </el-form-item>

                        <el-form-item label="六个月内查询次数" class="width-inlineLabel">
                            <el-input  type="number" clearable  v-model="userChecked.liugyncxcs" placeholder="例如：1"></el-input>
                        </el-form-item>

                        <el-form-item label="十二个月内查询次数" class="width-inlineLabel">
                            <el-input  type="number" clearable  v-model="userChecked.segyncxcs" placeholder="例如：1"></el-input>
                        </el-form-item>

                        <el-form-item label="当前小额笔数">
                            <el-radio-group v-model="userChecked.dqxebs" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.dqxebs" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="当前消费金融笔数">
                            <el-radio-group v-model="userChecked.dqxfjrbs" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.dqxfjrbs" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="贷款/信用卡是否存在止付；呆账；关注等异常">
                            <el-radio-group v-model="userChecked.sfczyc" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.sfczyc" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="当前逾期额度">
                            <el-radio-group v-model="userChecked.dqyqed" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.dqyqed" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <div>
                            <el-form-item label="近半年内有无逾期">
                                <el-radio-group v-model="userChecked.bnn_wyq" class="match-radioGropu">
                                    <el-radio v-for="(item,index) in userInfo.bnn_wyq" :key="index" :label="item.name">{{item.value}}</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="近半年内逾期一个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.bnn_yqygycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                            <el-form-item label="近半年内逾期两个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.bnn_yqlgycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                            <el-form-item label="近半年内逾期三个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.bnn_yqsgycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                            <el-form-item label="近半年内逾期四个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.bnn_yqsigycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                        </div>

                        <div>
                            <el-form-item label="近一年内有无逾期">
                                <el-radio-group v-model="userChecked.ynn_wyq" class="match-radioGropu">
                                    <el-radio v-for="(item,index) in userInfo.ynn_wyq" :key="index" :label="item.name">{{item.value}}</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="近一年内逾期一个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.ynn_yqygycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                            <el-form-item label="近一年内逾期两个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.ynn_yqlgycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                            <el-form-item label="近一年内逾期三个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.ynn_yqsgycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                            <el-form-item label="近一年内逾期四个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.ynn_yqsigycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                        </div>

                        <div>
                            <el-form-item label="近两年内有无逾期">
                                <el-radio-group v-model="userChecked.lnn_wyq" class="match-radioGropu">
                                    <el-radio v-for="(item,index) in userInfo.lnn_wyq" :key="index" :label="item.name">{{item.value}}</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="近两年内逾期一个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.lnn_yqygycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                            <el-form-item label="近两年内逾期两个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.lnn_yqlgycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                            <el-form-item label="近两年内逾期三个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.lnn_yqsgycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                            <el-form-item label="近两年内逾期四个月次数" class="width-inlineLabel">
                                <el-input  type="number" clearable  v-model="userChecked.lnn_yqsigycs" placeholder="例如：1"></el-input>
                            </el-form-item>
                        </div>
                    </div>

                    <div class="compare-form">
                        <el-form-item label="是否使用过微粒贷">
                            <el-radio-group v-model="userChecked.sfsygwld" class="match-radioGropu">
                                <el-radio v-for="(item,index) in userInfo.sfsygwld" :key="index" :label="item.name">{{item.value}}</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <!--                <el-form-item label="贷款额度">-->
                        <!--                    <el-input  type="number" clearable  v-model="userChecked.loan_years" placeholder="例如：1"></el-input>-->
                        <!--                </el-form-item>-->

                        <!--                <el-form-item label="放款时效">-->
                        <!--                    <el-radio-group v-model="userChecked.loan_time_limit" class="match-radioGropu">-->
                        <!--                        <el-radio v-for="(item,index) in userInfo.loan_time_limit" :key="index" :label="item.name">{{item.value}}</el-radio>-->
                        <!--                    </el-radio-group>-->
                        <!--                </el-form-item>-->

                        <!--                <el-form-item label="还款方式">-->
                        <!--                    <el-radio-group v-model="userChecked.loan_mode" class="match-radioGropu">-->
                        <!--                        <el-radio v-for="(item,index) in userInfo.loan_mode" :key="index" :label="item.name">{{item.value}}</el-radio>-->
                        <!--                    </el-radio-group>-->
                        <!--                </el-form-item>-->


                        <!--                <el-form-item label="利息">-->
                        <!--                    <el-input  type="number" clearable  v-model="userChecked.interest" placeholder="例如：0.55"></el-input>-->
                        <!--                </el-form-item>-->
                    </div>

                    <el-form-item class="compare-submit">
                        <el-button type="primary" @click="onSubmit" :loading="loadState.searchLoad">立即创建</el-button>
                    </el-form-item>

                </el-form>

            </div>
        </div>

    </div>
</template>

<script>
	import navRefush from '@/components/navRefush/navRefush' /*按钮组件  */
	import {getProductConditionApi,updateProductConditionApi} from '@/assets/js/api'
	import {userInfo} from "../../assets/js/userInfo";

	export default {
		name: "comLoanMatch",
		data() {
			return {
				loanArr: [],

				btnLoad:{
					btnBack:true,
				},

				productId:'',

				loadState: {    //按钮状态
					searchLoad:false
				},

				/*所有单选 数组*/
				userInfo: userInfo,

				checkedArr2:{
					hyzk:[1,2,3,4],
					hj:[],
					fclx:[],
				},

				/*用户选中*/
				userChecked: {
					product_id:0,
					loan_type:'',  //贷款类型 信用 房抵 车抵
					total_financing:'',         //总额
					// age: 18,          // 1、年龄
					min_age:'',  //最小年龄
					max_age:'',  //最大年龄
					hyzk: '',         // 3、婚姻状况    +++++++
					hj: '',           // 4、户籍        +++++++
					dwxz: 'null',         // 5、单位性质
					gzffxs: 'null',       // 6、工资发放形式
					pjgz: 'null',         // 7、平均工资
					bdwgzsc: 'null',      // 8、本单位工作时长
					sbjs: 'null',         // 9、社保基数
					sb_jnsc: 'null',      // 10、社保缴纳时长
					sb_xdwjnsc: 'null',   // 11、社保现单位缴纳时长
					gjjjs: 'null',        // 12、公积金基数
					gjj_jnsc: 'null',     // 13、公积金缴纳时长
					gjj_xdwjnsc: 'null',  // 14、公积金现单位缴纳时长
					yyzznx: 'null',       // 15、营业执照年限
					dwsfkc: 'null',       // 16、单位是否考察
					dgls: 'null',         // 17、对公流水
					gskpje: 'null',       // 18、公司开票金额
					gsnsje: 'null',       // 19、公司纳税金额
					fclx: 'null',         // 20、房产类型        ++++
					ajz: 'null',          // 21、按揭中（月供时间）
					ajjq: 'null',         // 22、按揭结清（结清时间）
					qkf: 'null',          // 23、全款房（过户时间）
					// fl: '',           // 24、房龄
					min_fl: 'null',           // 24、最小房龄
					max_fl: 'null',           // 24、最大房龄
					ajc: 'null',          // 25、按揭车（按揭时间）
					qkc: 'null',          // 26、全款车（按揭结清或过户时间）
					clsyc: 'null',        // 27、车辆所有权
					clxz: 'null',         // 28、车辆性质
					clczsj: 'null',       // 29、车辆持证时间
					clgsd: 'null',        // 30、车辆归属地
					cl: 'null',           // 31、车龄
					jqxsyyxq: 'null',     // 32、交强险剩余有效期
					xsgls: 'null',        // 33、行驶公里数
					syxsyyxq: 'null',     // 34、商业险剩余有效期
					bxlx: 'null',         // 35、保险类型
					bxjnfs: 'null',       // 36、保险缴纳方式
					bxjfsj: 'null',       // 37、保险缴费时间
					ygyncxcs: '',     // 38、一个月内查询次数
					lgyncxcs: '',     // 39、两个月内查询次数
					sgyncxcs: '',     // 40、三个月内查询次数
					liugyncxcs: '',   // 41、六个月内查询次数
					segyncxcs: '',    // 42、十二个月内查询次数
					dqxebs: 'null',       // 43、当前小额笔数
					dqxfjrbs: 'null',     // 44、当前消费金融笔数
					sfczyc: 'null',       // 45、贷款/信用卡是否存在止付；呆账；关注等异常
					dqyqed: 'null',       // 46、当前逾期额度
					bnn_wyq: 'null',      // 47、近半年内有无逾期
					bnn_yqygycs: '',  // 48、近半年内逾期一个月次数
					bnn_yqlgycs: '',  // 49、近半年内逾期两个月次数
					bnn_yqsgycs: '',  // 50、近半年内逾期三个月次数
					bnn_yqsigycs: '', // 51、近半年内逾期四个月次数
					ynn_wyq: 'null',      // 52、近一年内有无逾期
					ynn_yqygycs: '',  // 53、近一年内逾期一个月次数
					ynn_yqlgycs: '',  // 54、近一年内逾期二个月次数
					ynn_yqsgycs: '',  // 55、近一年内逾期三个月次数
					ynn_yqsigycs: '', // 56、近一年内逾期四个月次数
					lnn_wyq: 'null',      // 57、近两年内有无逾期
					lnn_yqygycs: '',  // 58、近两年内逾期一个月次数
					lnn_yqlgycs: '',  // 59、近两年内逾期二个月次数
					lnn_yqsgycs: '',  // 60、近两年内逾期三个月次数
					lnn_yqsigycs: '', // 61、近两年内逾期四个月次数
					sfsygwld: 'null',     // 62、是否使用过微粒贷

					sfyssqydd:'null',         //是否有上市企业订单
					sfgxjsqy:'null',         //是否高新技术企业

					// loan_years:'',   //贷款年限 额度（6.17 改成 额度）
					// loan_time_limit:'',   //放款时效  6.17 不要
					// loan_mode:'',   //还款方式
					// interest:'',   //利息

					loan_type_detail:'',  //贷款类型   68  信用贷款 企业信用贷款 抵押贷款 对公抵押贷款
					//  1、个人信用贷款；2、企业信用贷款；3、个人抵押贷款；4、企业抵押贷款

					update_time:'',  //当前时间

				},

			};
		},
		methods: {
			// Z1 返回上一页
			BtnSecondBack(){
				console.log('返回点击事件');
				this.$emit('GoBack','comLoanMatch');
			},

			FnGetProductCondition(){
				getProductConditionApi({
                    productId:this.productId,
                }).then(res=>{
					console.log(res);
					this.userChecked = res.data;
                }).catch(res=>{
					console.log(res);
                })
            },

			addItem() {
				this.loanArr.listArr.push({
					name: ""
				});
			},
			deleteItem(item, index) {
				console.log(index);
				this.loanArr.listArr.splice(index, 1);
			},

			onSubmit(){
				this.GLOBAL.btnStateChange(this,'loadState','searchLoad');
				// console.log(this.userChecked);

				/*婚姻状况*/
				if(this.checkedArr2.hyzk.length > 0){
					this.userChecked.hyzk = this.checkedArr2.hyzk.join(',');
				}else{
					this.userChecked.hyzk = '';
				}

				/*户籍*/
				if(this.checkedArr2.hj.length > 0){
					this.userChecked.hj = this.checkedArr2.hj.join(',');
				}else{
					this.userChecked.hj = '';
				}

				/*房产类型*/
				if(this.checkedArr2.fclx.length > 0){
					this.userChecked.fclx = this.checkedArr2.fclx.join(',');
				}else{
					this.userChecked.fclx = '';
				}
				console.log(this.userChecked.hyzk);
				console.log(this.userChecked.hj);
				console.log(this.userChecked.fclx);

				console.log(this.userChecked.loan_type);
				if(this.userChecked.loan_type == ''){
					this.$message({
						message: '申请贷款类型 必选',
						type: 'error',
						duration:1500,
						offset:40,
					});
				}

				if(this.userChecked.loan_type_detail == ''){
					this.$message({
						message: '贷款类型 必选',
						type: 'error',
						duration:1500,
						offset:100,
					});
				}


				// return false
				updateProductConditionApi(this.userChecked).then(res=>{
					console.log(res);
					let that =this;
					if(res.status == 'success'){
						this.$message({
							message: '添加成功',
							type: 'success',
							duration:1500,
							offset:40,
						});
						setTimeout(function(){
							window.location.reload();
						},1500)
					}else{
						this.$message({
							message: '添加失败',
							type: 'error',
							duration:1500,
							offset:40,
						});
					}
				}).catch(res=>{
					console.log(res);
				})
			},

		},
		created() {
			let  CookiePageLoan = JSON.parse(sessionStorage.getItem('loanDetailParm'));
			console.log(CookiePageLoan);
			if(CookiePageLoan){  //有存 则显示orderInfo页面
                this.productId = CookiePageLoan.productId;
				this.FnGetProductCondition();

			}

		},

        components:{
	        navRefush,
        },

	};
</script>
