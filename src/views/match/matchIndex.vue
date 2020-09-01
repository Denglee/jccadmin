<template>
    <div class="pub-box">
        <el-form :model="addProForm" ref="addProForm" label-width="110px"
                 :rules="addProRules" class="pub-form addProForm" v-if="showState.matchIndex">
            <!--图片上传-->
            <div class="addPro-item2">
                <div class="img-ico">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="addProForm.ioc" alt="" v-if="addProForm.ioc"
                            :preview-src-list="srcList">
                    </el-image>
                </div>
                <el-form-item label=""  prop="ioc" :rules="{ required: true, message: '产品图标不能为空', trigger: 'blur' }">
                    <input type="file" class="face" accept="image/*" @change="upload_photo" ref="inputer">
                </el-form-item>
            </div>

            <!--输入框-->
            <ul class="addPro-itemUl">
                <li class="addPro-itemUl-firli">
                    <el-form-item label="产品名称" prop="name" :rules="{ required: true, message: '产品名称不能为空', trigger: 'blur' }">
                        <el-input clearable  v-model="addProForm.name" placeholder="输入框"></el-input>
                        <div class="addName-tip">提示: 产品名称格式记得带“-”，比如："中国银行-优客分期卡"</div>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="产品类型" prop="prodType" :rules="{ required: true, message: '产品类型不能为空', trigger: 'change' }">
                        <el-select filterable v-model="addProForm.prodType" placeholder="请选择产品类型">
                            <el-option
                                    v-for="(loanType,index) in loanType"
                                    :label="loanType.name"
                                    :value="loanType.id"
                            ></el-option>
                        </el-select>

                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="最小额度" prop="quotaDo.minQuota" :rules="{ required: true, message: '最小额度不能为空', trigger: 'blur' }">
                        <el-input clearable  type="number" @mousewheel.native.prevent v-model="addProForm.quotaDo.minQuota" placeholder="最小额度"></el-input>
                        <div class="addName-tip">例如： 1</div>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="最大额度" prop="quotaDo.maxQuota" :rules="{ required: true, message: '最大额度不能为空', trigger: 'blur' }">
                        <el-input clearable  type="number" @mousewheel.native.prevent v-model="addProForm.quotaDo.maxQuota" placeholder="最大额度"></el-input>
                        <div class="addName-tip">例如： 10</div>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="额度间隔" prop="quotaDo.step" :rules="{ required: true, message: '额度间隔不能为空', trigger: 'blur' }">
                        <el-input clearable  type="number" @mousewheel.native.prevent v-model="addProForm.quotaDo.step" placeholder="额度间隔"></el-input>
                        <div class="addName-tip">例如： 1</div>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="默认额度" prop="quotaDo.defaultQuota" :rules="{ required: true, message: '默认额度不能为空', trigger: 'blur' }">
                        <el-input clearable  type="number" @mousewheel.native.prevent v-model="addProForm.quotaDo.defaultQuota" placeholder="默认额度"></el-input>
                        <div class="addName-tip">例如： 1</div>
                    </el-form-item>
                </li>

                <li >
                    <el-form-item label="免责声明" prop="mzsmDo.name" :rules="{ required: true, message: '请输入免责声明', trigger: 'blur' }">
                        <el-input clearable  v-model="addProForm.mzsmDo.name" placeholder="例如： 最终以机构发布为准"  type="textarea" clearable></el-input>
                    </el-form-item>
                </li>
            </ul>

            <!--增加-->
            <ul class="addPro-item">
                <li>
                    <el-form-item class="first-itemLabel"
                            v-for="(domain, index) in addProForm.labelList"
                            :label="'产品标签1-' + index"
                            :key="domain.key"
                            :prop="'labelList.' + index + '.name'" :rules="{ required: true, message: '标签1不能为空', trigger: 'blur' }">
                        <el-input clearable  v-model="domain.name" placeholder="请输入标签1"></el-input>
                        <div class="addEg-tip">例如： 征信宽松</div>
                        <el-button @click="addInp('labelList',index)" v-if="index == 0">新增标签</el-button>
                        <el-button @click.prevent="removeInp('labelList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>


                    <el-form-item class="first-itemLabel"
                            v-for="(basicItem, index) in addProForm.basicInfoList"
                            :label="'基本信息' + index"
                            :key="basicItem.key" >
                        <el-form-item class="secend-itemLabel" :prop="'basicInfoList.' + index + '.name'"
                                      :rules="{ required: true, message: '基本信息名称不能为空', trigger: 'blur' }">
                            <el-input clearable  v-model="basicItem.name" placeholder="请输入基本信息名称"></el-input>
                            <div class="addEg-tip" v-if="index == 0">例如：利率</div>
                            <div class="addEg-tip" v-else-if="index == 1">例如：5-100万</div>
                            <div class="addEg-tip" v-else>例如：等额本息</div>
                        </el-form-item>

                        <el-form-item class="secend-itemLabel" :prop="'basicInfoList.' + index + '.nameValue'" v-if="index == 0"
                                      :rules="{ required: true, message: '基本信息值不能为空', trigger: 'blur' }">
                            <el-input clearable  v-model="basicItem.nameValue" placeholder="请输入基本信息值"></el-input>
                            <div class="addEg-tip">例如： 0.55%</div>
                        </el-form-item>
                        <!--<el-form-item class="secend-itemLabel" :prop="'basicInfoList.' + index + '.nameValue'" v-if="index == 1">
                            <el-input clearable  v-model="basicItem.nameValue" placeholder="请输入基本信息值2"></el-input>
                            &lt;!&ndash;<div class="addEg-tip">例如： 5-100万</div>&ndash;&gt;
                        </el-form-item>-->
                        <el-form-item class="secend-itemLabel" :prop="'basicInfoList.' + index + '.nameValue'" v-if="index == 2"
                        style="width: 40%;" :rules="{ required: true, message: '还款方式不能为空', trigger: 'blur' }">
                            <el-input clearable type="number" @mousewheel.native.prevent  v-model="basicItem.nameValue" placeholder="请输入还款方式"></el-input>
                            <div class="addEg-tip">例如：1 。(提示：1是等额本息还款；2是等额本金还款；3是等额等息还款；4是先息后本还款；5是到期还本还款；6是气球贷还款)</div>
                        </el-form-item>
                        <!--<el-button @click="addInp('basicInfoList',index)" v-if="index == 0">新增基本信息</el-button>
                        <el-button @click.prevent="removeInp('basicInfoList',index)" v-if="index != 0">删除</el-button>-->
                    </el-form-item>
                </li>

                <li>
                    <el-form-item class="first-itemLabel"
                            v-for="(hkqsItem, index) in addProForm.qsList"
                            :label="'还款期数' + index"
                            :key="hkqsItem.key">
                        <el-form-item class="secend-itemLabel" :prop="'qsList.' + index + '.name'" :rules="{ required: true, message: '还款期数名称不能为空', trigger: 'blur' }">
                            <el-input clearable  v-model="hkqsItem.name" placeholder="请输入还款期数名称" @blur="qsBlur($event,index)"></el-input>
                            <div class="addEg-tip">例如：12期</div>
                        </el-form-item>
                       <!-- <el-form-item class="secend-itemLabel" :prop="'qsList.' + index + '.nameValue'" :rules="{ required: true, message: '还款期数值不能为空', trigger: 'blur' }">
                            <el-input type="number" @mousewheel.native.prevent clearable  v-model="hkqsItem.nameValue" placeholder="请输入还款期数值"></el-input>
                            <div class="addEg-tip">例如：12</div>
                        </el-form-item>-->
                        <el-button @click="addInp('qsList',index)" v-if="index == 0">新增还款期数</el-button>
                        <el-button @click.prevent="removeInp('qsList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>


                <li>
                    <el-form-item class="first-itemLabel"
                            v-for="(label2Item, index) in addProForm.label2List"
                            :label="'产品标签2-' + index"
                            :key="label2Item.key"
                            :prop="'label2List.' + index + '.name'" :rules="{ required: true, message: '标签2不能为空', trigger: 'blur' }">
                        <el-input clearable  v-model="label2Item.name" placeholder="请输入标签2"></el-input>
                        <div class="addEg-tip">例如：随借随还</div>
                        <el-button @click="addInp('label2List',index)" v-if="index == 0">新增标签2</el-button>
                        <el-button @click.prevent="removeInp('label2List',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item class="first-itemLabel"
                            v-for="(bltjItem, index) in addProForm.bltjList"
                            :label="'办理条件' + index"
                            :key="bltjItem.key">
                        <el-form-item class="secend-itemLabel" :prop="'bltjList.' + index + '.name'" :rules="{ required: true, message: '办理条件名称不能为空', trigger: 'blur' }">
                            <el-input clearable  v-model="bltjItem.name" placeholder="请输入办理条件名称"></el-input>
                            <div class="addEg-tip">例如：年龄要求</div>
                        </el-form-item>
                        <el-form-item class="secend-itemLabel" :prop="'bltjList.' + index + '.nameValue'" :rules="{ required: true, message: '办理条件值不能为空', trigger: 'blur' }">
                            <el-input clearable  v-model="bltjItem.nameValue" placeholder="请输入办理条件值"></el-input>
                            <div class="addEg-tip">例如：20-60岁</div>
                        </el-form-item>
                        <el-button @click="addInp('bltjList',index)" v-if="index == 0">新增办理条件</el-button>
                        <el-button @click.prevent="removeInp('bltjList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item class="first-itemLabel"
                            v-for="(sxzlItem, index) in addProForm.sxzlList"
                            :label="'所需资料' + index"
                            :key="sxzlItem.key"
                            :prop="'sxzlList.' + index + '.name'" :rules="{ required: true, message: '所需资料不能为空', trigger: 'blur' }">
                        <el-input clearable  v-model="sxzlItem.name" placeholder="请输入所需资料"></el-input>
                        <div class="addEg-tip">例如：个人身份证</div>
                        <el-button @click="addInp('sxzlList',index)" v-if="index == 0">新增所需资料</el-button>
                        <el-button @click.prevent="removeInp('sxzlList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item class="first-itemLabel"
                            v-for="(bllcItem, index) in addProForm.bllcList"
                            :label="'办理流程' + index"
                            :key="bllcItem.key"
                            :prop="'bllcList.' + index + '.name'" :rules="{ required: true, message: '办理流程不能为空', trigger: 'blur' }">
                        <el-input clearable  v-model="bllcItem.name" placeholder="请输入办理流程"></el-input>
                        <div class="addEg-tip">例如：联系客服经理操作办理</div>
                        <el-button @click="addInp('bllcList',index)" v-if="index == 0">新增办理流程</el-button>
                        <el-button @click.prevent="removeInp('bllcList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

               <!-- <li>
                    <el-form-item class="first-itemLabel"
                            v-for="(otherinfoItem, index) in addProForm.ohterInfoList"
                            :label="'其它信息' + index"
                            :key="otherinfoItem.key">
                        <el-form-item class="secend-itemLabel" :prop="'ohterInfoList.' + index + '.name'"  :rules="{ required: true, message: '其它信息名称不能为空', trigger: 'blur' }">
                            <el-input clearable  v-model="otherinfoItem.name" placeholder="请输入其它信息名称"></el-input>
                            <div class="addEg-tip">例如：期限</div>
                        </el-form-item>
                        <el-form-item class="secend-itemLabel" :prop="'ohterInfoList.' + index + '.nameValue'"  :rules="{ required: true, message: '其它信息值不能为空', trigger: 'blur' }">
                            <el-input clearable  v-model="otherinfoItem.nameValue" placeholder="请输入其它信息值"></el-input>
                            <div class="addEg-tip">例如：1年、2年</div>
                        </el-form-item>
                        <el-button @click="addInp('ohterInfoList',index)" v-if="index == 0">新增其它信息</el-button>
                        <el-button @click.prevent="removeInp('ohterInfoList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>-->

               <!-- <li>
                    <el-form-item class="first-itemLabel"
                            v-for="(zxyqItem, index) in addProForm.zxyqList"
                            :label="'征信要求' + index"
                            :key="zxyqItem.key">
                        <el-form-item class="secend-itemLabel" :prop="'zxyqList.' + index + '.name'" :rules="{ required: true, message: '征信要求名称不能为空', trigger: 'blur' }">
                            <el-input clearable  v-model="zxyqItem.name" placeholder="请输入征信要求名称"></el-input>
                            <div class="addEg-tip">例如：当前逾期要求</div>
                        </el-form-item>
                        <el-form-item class="secend-itemLabel" :prop="'zxyqList.' + index + '.nameValue'" :rules="{ required: true, message: '征信要求值不能为空', trigger: 'blur' }">
                            <el-input clearable  v-model="zxyqItem.nameValue" placeholder="请输入征信要求值"></el-input>
                            <div class="addEg-tip">例如：当前贷款不能有逾期</div>
                        </el-form-item>
                        <el-button @click="addInp('zxyqList',index)" v-if="index == 0">新增征信要求</el-button>
                        <el-button @click.prevent="removeInp('zxyqList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>-->
            </ul>

            <el-form-item label="经理联系方式" style="margin-top: 20px"  prop="contactDo.telephone"
                          :rules="{ required: true, message: '经理联系方式不能为空', trigger: 'blur' }">
                <el-input clearable  v-model="addProForm.contactDo.telephone" placeholder="经理联系方式"></el-input>
                <div class="addName-tip">例如:176845429466</div>
            </el-form-item>

            <!--qrimg图片上传-->
            <div class="addPro-item2">
                <div class="img-ico">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="addProForm.contactDo.qrimg" alt="" v-if="addProForm.contactDo.qrimg"
                            :preview-src-list="srcList">
                    </el-image>
                </div>
                <el-form-item label=""  prop="contactDo.qrimg">
                    <input type="file" class="face" accept="image/*" @change="upload_qrimg" ref="inputer2">
                </el-form-item>
            </div>


            <el-form-item class="sub-item compare-submit">
                <el-button type="primary" @click="onSubmit('addProForm')"  :loading="loadState.searchLoad">立即添加</el-button>
            </el-form-item>
        </el-form>

        <matchCompare v-if="showState.matchCompare" :product_id="product_id"></matchCompare>
    </div>
</template>

<script>
    import matchCompare from "./matchCompare";
    import {addProduct, imgUpload} from '@/assets/js/api'
    import followTrainer from "../../../../insist/src/views/Member/memberIndex/followTrainer";

    export default {
        name: "matchIndex",
        data() {
            return {
                srcList:[],
                qrimgArr:[],

                loadState: {    //按钮状态
                    searchLoad:false
                },

                addProRules: {  //验证规则

                },

                showState:{
                    matchIndex:true,
                    matchCompare:false,
                },

                dialogImageUrl: '',
                dialogVisible: false,
                productImgs: [],
                isMultiple: true,
                imgLimit: 6,


                loanType: [
                    {id: '1', name: '银行信贷'},
                    {id: '2', name: '机构信贷'},
                    // {id: '3', name: '小额贷款'},
                    {id: '4', name: '企业贷款'},
                    {id: '5', name: '抵押贷款'},
                    {id: '6', name: '线上急融'},
                ],

                shipCard: [
                    {name: "卡1", shopID: 1},
                    {name: "卡2", shopID: 2}
                ],

                product_id :'10',
                addProForm: {
                    name: "", //产品名称
                    prodType: '',   //类型
                    id: '',
                    ioc: '',  //银行logo   上传回显的路径

                    contactDo:{
                        qrimg:'',
                        telephone:'',
                    },



                    // 产品标签1
                    labelList: [
                        {name: '', id: '', productId: ''},
                    ],

                    //基本信息
                    basicInfoList: [
                        {name: '利率', nameValue: "", id: '', productId: ''},
                        {name: '', nameValue: "", id: '', productId: ''},
                        {name: '', nameValue: "", id: '', productId: ''},
                    ],

                    //还款期数
                    qsList: [
                        {name: '', nameValue: "", id: '', productId: ''},
                    ],

                    quotaDo: {
                        // quotaDo:0, //额度
                        id: '',
                        minQuota: 1,  //最小额度
                        maxQuota: 1, //最大额度
                        step: 1, //间隔额度
                        defaultQuota: 1, //默认额度
                        productId: '',
                    },

                    //产品标签2
                    label2List: [
                        {name: '', id: '', productId: ''},
                    ],

                    //办理条件
                    bltjList: [
                        {name: '', nameValue: '', id: '', productId: ''},
                    ],

                    //所需资料
                    sxzlList: [
                        {name: '', id: '', productId: ''},
                    ],

                    //办理流程
                    bllcList: [
                        {name: '', id: '', productId: ''},
                    ],

                    //其它信息
                    // ohterInfoList: [
                    //     {name: '', nameValue: '', id: '', productId: ''},
                    // ],

                    //征信要求
                    // zxyqList: [
                    //     {name: '', nameValue: '', id: '', productId: ''},
                    // ],

                    //免责声明
                    mzsmDo: {
                        name: '产品信息来源于机构客户经理或第三方信息平台,最终以机构发布为准。如产品信息有误或其他异议,请在公众号回复/反馈',
                        id: '',
                        productId: '',
                    },
                },

                // imgIco:{},   //logo图片路径
            };
        },
        methods: {
            qsBlur(event,index){
                console.log(index);
                let qsNameVal = parseFloat(event.target.value) ;

                console.log(qsNameVal);
                this.addProForm.qsList[index].nameValue = qsNameVal;
                console.log(this.addProForm.qsList);
            },

            upload_photo: function () {
                var that = this;

                var inputDOM = that.$refs.inputer;
                var file = inputDOM.files;

                var formData = new FormData();
                formData.append('file', file[0]);

                imgUpload(formData,).then(res => {
                    this.srcList = [];
                    this.srcList.push(res);
                    console.log(res);
                    this.addProForm.ioc = res;
                }).catch(res => {
                    console.log(res);
                })
            },

            upload_qrimg: function () {
                var that = this;
                var inputDOM = that.$refs.inputer2;
                var file = inputDOM.files;

                var formData = new FormData();
                formData.append('file', file[0]);

                imgUpload(formData,).then(res => {
                    this.qrimgArr = [];
                    this.qrimgArr.push(res);
                    console.log(res);
                    this.addProForm.contactDo.qrimg = res;
                }).catch(res => {
                    console.log(res);
                })
            },


            /*删除*/
            removeInp(type, index) {
                this.addProForm[type].splice(index, 1)
            },

            /*添加*/
            addInp(type) {
                console.log(type);
                this.addProForm[type].push({
                    productId: "",
                    name: '',
                    key: Date.now()
                });
            },

            // 上传图片成功
            imgSuccess(res, file, fileList) {
                console.log(res)
                console.log(file)
                console.log(fileList)  // 这里可以获得上传成功的相关信息
            },

            /*提交*/
            onSubmit(formName) {
                let that = this;

                console.log(that.addProForm);

                // return false
                that.$refs[formName].validate((valid) => {
                    this.GLOBAL.btnStateChange(this, 'loadState', 'searchLoad');
                    if (valid) {
                        addProduct(this.addProForm).then(res => {
                            console.log(res);
                            let that = this;
                            if (res.status == 'success') {
                                this.$message({
                                    message: '添加成功',
                                    type: 'success',
                                    duration: 1500,
                                    offset: 40,
                                });
                                setTimeout(() => {
                                    this.product_id = res.data.productId;
                                    this.showState = {
                                        matchIndex: false,
                                        matchCompare: true,
                                    }
                                }, 1500)
                            } else {
                                this.$message({
                                    message: '添加失败',
                                    type: 'error',
                                    duration: 1500,
                                    offset: 40,
                                });
                            }


                        }).catch(res => {
                            console.log(res);
                        })
                    } else {
                        this.$message({
                            message: '提交错误，请核对',
                            type: 'error',
                            duration: 1500,
                            offset: 40,
                        });
                        return false;
                    }

                });
            }
        },
        created() {
        },

        components:{
            matchCompare,
        }
    }
</script>
