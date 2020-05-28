<template>
    <div>
        <el-form ref="form" :model="userChecked" label-width="140px" class="compare-form">

            <!-- 0501 单选 demo-->
            <el-form-item label="申请贷款类型">
                <el-radio-group v-model="userChecked.loan_type" class="match-radioGropu">
                    <el-radio v-for="(item,index) in userInfo.loan_type" :key="index" :label="item.name">{{item.value}}</el-radio>
                </el-radio-group>
            </el-form-item>

            <!--0502 输入框 demo-->
            <el-form-item label="融资总额">
                <el-input v-model="userChecked.total_financing"></el-input>
            </el-form-item>

            <el-form-item label="最小年龄">
                <el-input v-model="userChecked.min_age"></el-input>
            </el-form-item>

            <el-form-item label="最大年龄">
                <el-input v-model="userChecked.max_age"></el-input>
            </el-form-item>

            <!-- 0503 多选demo-->
            <el-form-item label="婚姻状况">
                <el-checkbox-group v-model="userChecked.hyzk">
                    <el-checkbox v-for="(item,index) in userInfo.hyzk" :key="index" :label="item.name">
                        {{item.value}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="户籍">
                <el-checkbox-group v-model="userChecked.hj">
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
                <el-radio-group v-model="userChecked.yyzznx" class="match-radioGropu">
                    <el-radio v-for="(item,index) in userInfo.yyzznx" :key="index" :label="item.name">{{item.value}}</el-radio>
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

            <el-form-item label="房产类型">
                <el-checkbox-group v-model="userChecked.fclx">
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

            <el-form-item label="最小房龄">
                <el-input v-model="userChecked.min_fl"></el-input>
            </el-form-item>

            <el-form-item label="最大房龄">
                <el-input v-model="userChecked.max_fl"></el-input>
            </el-form-item>

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

            <el-form-item label="一个月内查询次数">
                <el-input v-model="userChecked.ygyncxcs"></el-input>
            </el-form-item>

            <el-form-item label="两个月内查询次数">
                <el-input v-model="userChecked.lgyncxcs"></el-input>
            </el-form-item>

            <el-form-item label="三个月内查询次数">
                <el-input v-model="userChecked.sgyncxcs"></el-input>
            </el-form-item>

            <el-form-item label="六个月内查询次数">
                <el-input v-model="userChecked.liugyncxcs"></el-input>
            </el-form-item>

            <el-form-item label="十二个月内查询次数">
                <el-input v-model="userChecked.segyncxcs"></el-input>
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

                <el-form-item label="近半年内逾期一个月次数">
                    <el-input v-model="userChecked.bnn_yqygycs"></el-input>
                </el-form-item>
                <el-form-item label="近半年内逾期两个月次数">
                    <el-input v-model="userChecked.bnn_yqlgycs"></el-input>
                </el-form-item>
                <el-form-item label="近半年内逾期三个月次数">
                    <el-input v-model="userChecked.bnn_yqsgycs"></el-input>
                </el-form-item>
                <el-form-item label="近半年内逾期四个月次数">
                    <el-input v-model="userChecked.bnn_yqsigycs"></el-input>
                </el-form-item>
            </div>

            <div>
                <el-form-item label="近一年内有无逾期">
                    <el-radio-group v-model="userChecked.ynn_wyq" class="match-radioGropu">
                        <el-radio v-for="(item,index) in userInfo.ynn_wyq" :key="index" :label="item.name">{{item.value}}</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="近一年内逾期一个月次数">
                    <el-input v-model="userChecked.ynn_yqygycs"></el-input>
                </el-form-item>
                <el-form-item label="近一年内逾期两个月次数">
                    <el-input v-model="userChecked.ynn_yqlgycs"></el-input>
                </el-form-item>
                <el-form-item label="近一年内逾期三个月次数">
                    <el-input v-model="userChecked.ynn_yqsgycs"></el-input>
                </el-form-item>
                <el-form-item label="近一年内逾期四个月次数">
                    <el-input v-model="userChecked.ynn_yqsigycs"></el-input>
                </el-form-item>
            </div>

            <div>
                <el-form-item label="近两年内有无逾期">
                    <el-radio-group v-model="userChecked.lnn_wyq" class="match-radioGropu">
                        <el-radio v-for="(item,index) in userInfo.lnn_wyq" :key="index" :label="item.name">{{item.value}}</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="近两年内逾期一个月次数">
                    <el-input v-model="userChecked.lnn_yqygycs"></el-input>
                </el-form-item>
                <el-form-item label="近两年内逾期两个月次数">
                    <el-input v-model="userChecked.lnn_yqlgycs"></el-input>
                </el-form-item>
                <el-form-item label="近两年内逾期三个月次数">
                    <el-input v-model="userChecked.lnn_yqsgycs"></el-input>
                </el-form-item>
                <el-form-item label="近两年内逾期四个月次数">
                    <el-input v-model="userChecked.lnn_yqsigycs"></el-input>
                </el-form-item>
            </div>

            <el-form-item label="是否使用过微粒贷">
                <el-radio-group v-model="userChecked.sfsygwld" class="match-radioGropu">
                    <el-radio v-for="(item,index) in userInfo.sfsygwld" :key="index" :label="item.name">{{item.value}}</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="贷款年限">
                <el-input v-model="userChecked.loan_years"></el-input>
            </el-form-item>

            <el-form-item label="放款时效">
                <el-radio-group v-model="userChecked.loan_time_limit" class="match-radioGropu">
                    <el-radio v-for="(item,index) in userInfo.loan_time_limit" :key="index" :label="item.name">{{item.value}}</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="还款方式">
                <el-radio-group v-model="userChecked.loan_mode" class="match-radioGropu">
                    <el-radio v-for="(item,index) in userInfo.loan_mode" :key="index" :label="item.name">{{item.value}}</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="利息">
                <el-input v-model="userChecked.interest"></el-input>
            </el-form-item>


            <el-form-item class="compare-submit">
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import {userInfo} from '@/assets/js/userInfo' /*引用 用户信息 */

    import {addProductCondition} from '@/assets/js/api'
    export default {
        name: "matchCompare",  //比对
        data() {
            return {
                /*所有单选 数组*/
                userInfo: userInfo,

                /*用户选中*/
                userChecked: {
                    product_id:20,
                    loan_type:'1',  //贷款类型
                    total_financing:'',         //总额
                    // age: 18,          // 1、年龄
                    min_age:'10',  //最小年龄
                    max_age:'20',  //最大年龄
                    hyzk: '1，2, 3',         // 3、婚姻状况    +++++++
                    hj: '1，2',           // 4、户籍        +++++++
                    dwxz: '1',         // 5、单位性质
                    gzffxs: '1',       // 6、工资发放形式
                    pjgz: '1',         // 7、平均工资
                    bdwgzsc: '1',      // 8、本单位工作时长
                    sbjs: '1',         // 9、社保基数
                    sb_jnsc: '1',      // 10、社保缴纳时长
                    sb_xdwjnsc: '1',   // 11、社保现单位缴纳时长
                    gjjjs: '1',        // 12、公积金基数
                    gjj_jnsc: '1',     // 13、公积金缴纳时长
                    gjj_xdwjnsc: '1',  // 14、公积金现单位缴纳时长
                    yyzznx: '1',       // 15、营业执照年限
                    dwsfkc: '1',       // 16、单位是否考察
                    dgls: '1',         // 17、对公流水
                    gskpje: '1',       // 18、公司开票金额
                    gsnsje: '1',       // 19、公司纳税金额
                    fclx: '1,3',         // 20、房产类型        ++++
                    ajz: '1',          // 21、按揭中（月供时间）
                    ajjq: '1',         // 22、按揭结清（结清时间）
                    qkf: '1',          // 23、全款房（过户时间）
                    fl: '1',           // 24、房龄
                    min_fl: '1',           // 24、最小房龄
                    max_fl: '20',           // 24、最大房龄
                    ajc: '1',          // 25、按揭车（按揭时间）
                    qkc: '1',          // 26、全款车（按揭结清或过户时间）
                    clsyc: '1',        // 27、车辆所有权
                    clxz: '1',         // 28、车辆性质
                    clczsj: '1',       // 29、车辆持证时间
                    clgsd: '1',        // 30、车辆归属地
                    cl: '1',           // 31、车龄
                    jqxsyyxq: '1',     // 32、交强险剩余有效期
                    xsgls: '1',        // 33、行驶公里数
                    syxsyyxq: '1',     // 34、商业险剩余有效期
                    bxlx: '1',         // 35、保险类型
                    bxjnfs: '1',       // 36、保险缴纳方式
                    bxjfsj: '1',       // 37、保险缴费时间
                    ygyncxcs: '1',     // 38、一个月内查询次数
                    lgyncxcs: '1',     // 39、两个月内查询次数
                    sgyncxcs: '1',     // 40、三个月内查询次数
                    liugyncxcs: '1',   // 41、六个月内查询次数
                    segyncxcs: '1',    // 42、十二个月内查询次数
                    dqxebs: '1',       // 43、当前小额笔数
                    dqxfjrbs: '1',     // 44、当前消费金融笔数
                    sfczyc: '1',       // 45、贷款/信用卡是否存在止付；呆账；关注等异常
                    dqyqed: '1',       // 46、当前逾期额度
                    bnn_wyq: '1',      // 47、近半年内有无逾期
                    bnn_yqygycs: '1',  // 48、近半年内逾期一个月次数
                    bnn_yqlgycs: '1',  // 49、近半年内逾期两个月次数
                    bnn_yqsgycs: '1',  // 50、近半年内逾期三个月次数
                    bnn_yqsigycs: '1', // 51、近半年内逾期四个月次数
                    ynn_wyq: '1',      // 52、近一年内有无逾期
                    ynn_yqygycs: '1',  // 53、近一年内逾期一个月次数
                    ynn_yqlgycs: '1',  // 54、近一年内逾期二个月次数
                    ynn_yqsgycs: '1',  // 55、近一年内逾期三个月次数
                    ynn_yqsigycs: '1', // 56、近一年内逾期四个月次数
                    lnn_wyq: '1',      // 57、近两年内有无逾期
                    lnn_yqygycs: '1',  // 58、近两年内逾期一个月次数
                    lnn_yqlgycs: '1',  // 59、近两年内逾期二个月次数
                    lnn_yqsgycs: '1',  // 60、近两年内逾期三个月次数
                    lnn_yqsigycs: '1', // 61、近两年内逾期四个月次数
                    sfsygwld: '1',     // 62、是否使用过微粒贷

                    sfyssqydd:'1',         //是否有上市企业订单
                    sfgxjsqy:'1',         //是否高新技术企业

                    loan_years:'1',   //贷款年限
                    loan_time_limit:'1',   //放款时效
                    loan_mode:'1',   //还款方式
                    interest:'1',   //利息

                    loan_type_detail:'1',  //贷款类型   68  信用贷款 企业信用贷款 抵押贷款 对公抵押贷款
                    update_time:'',  //当前时间

                },
            }
        },
        methods: {
            onSubmit(){
                console.log(this.userChecked);
                addProductCondition(this.userChecked).then(res=>{
                    console.log(res);
                }).catch(res=>{
                    console.log(res);
                })
            },
        },
        created() {
            console.log(typeof (this.userChecked.fclx))
        },
    }
</script>
<style lang="scss">
    @import '@/assets/css/match.scss'
</style>
