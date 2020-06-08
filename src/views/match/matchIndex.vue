<template>
    <div class="pub-box">
        <el-form ref="addProForm" label-width="100px" class="pub-form addProForm" v-if="showState.matchIndex">
            <!--图片上传-->
            <div class="addPro-item2">
                <div class="img-ico">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="addProForm.ioc" alt="" v-if="addProForm.ioc"
                            :preview-src-list="srcList">
                    </el-image>
                </div>
                <input type="file" class="face" accept="image/*" @change="upload_photo" ref="inputer">
            </div>

            <!--输入框-->
            <ul class="addPro-itemUl">
                <li >
                    <el-form-item label="产品名称">
                        <el-input clearable  v-model="addProForm.name" placeholder="输入框"></el-input>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="产品类型">
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
                    <el-form-item label="额度">
                        <el-input clearable type="number"  v-model="addProForm.quotaDo.quotaDo" placeholder="额度"></el-input>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="最小额度">
                        <el-input clearable  type="number" v-model="addProForm.quotaDo.minQuota" placeholder="最小额度"></el-input>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="最大额度">
                        <el-input clearable  type="number" v-model="addProForm.quotaDo.maxQuota" placeholder="最大额度"></el-input>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="额度间隔">
                        <el-input clearable  type="number" v-model="addProForm.quotaDo.step" placeholder="额度间隔"></el-input>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item label="额度默认值">
                        <el-input clearable  type="number" v-model="addProForm.quotaDo.defaultQuota" placeholder="额度默认值"></el-input>
                    </el-form-item>
                </li>

                <li >
                    <el-form-item label="免责声明">
                        <el-input clearable  v-model="addProForm.mzsmDo.name" placeholder="请输入免责声明"  type="textarea" clearable></el-input>
                    </el-form-item>
                </li>
            </ul>

            <!--增加-->
            <ul class="addPro-item">
                <li>
                    <el-form-item
                            v-for="(domain, index) in addProForm.labelList"
                            :label="'产品标签' + index"
                            :key="domain.key"
                            :prop="'labelList.' + index + '.name'">
                        <el-input clearable  v-model="domain.name" placeholder="请输入标签1"></el-input>
                        <el-button @click="addInp('labelList',index)" v-if="index == 0">新增标签</el-button>
                        <el-button @click.prevent="removeInp('labelList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item
                            v-for="(basicItem, index) in addProForm.basicInfoList"
                            :label="'基本信息' + index"
                            :key="basicItem.key"
                            :prop="'basicInfoList.' + index + '.name'">
                        <el-input clearable  v-model="basicItem.name" placeholder="请输入基本信息"></el-input>
                        <el-button @click="addInp('basicInfoList',index)" v-if="index == 0">新增基本信息</el-button>
                        <el-button @click.prevent="removeInp('basicInfoList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item
                            v-for="(hkqsItem, index) in addProForm.qsList"
                            :label="'还款期数' + index"
                            :key="hkqsItem.key"
                            :prop="'qsList.' + index + '.name'">
                        <el-input clearable  v-model="hkqsItem.name" placeholder="请输入还款期数"></el-input>
                        <el-button @click="addInp('qsList',index)" v-if="index == 0">新增还款期数</el-button>
                        <el-button @click.prevent="removeInp('qsList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>


                <li>
                    <el-form-item
                            v-for="(label2Item, index) in addProForm.label2List"
                            :label="'产品标签2-' + index"
                            :key="label2Item.key"
                            :prop="'label2List.' + index + '.name'">
                        <el-input clearable  v-model="label2Item.name" placeholder="请输入标签2"></el-input>
                        <el-button @click="addInp('label2List',index)" v-if="index == 0">新增标签2</el-button>
                        <el-button @click.prevent="removeInp('label2List',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item
                            v-for="(bltjItem, index) in addProForm.bltjList"
                            :label="'办理条件' + index"
                            :key="bltjItem.key"
                            :prop="'bltjList.' + index + '.name'">
                        <el-input clearable  v-model="bltjItem.name" placeholder="请输入办理条件"></el-input>
                        <el-button @click="addInp('bltjList',index)" v-if="index == 0">新增办理条件</el-button>
                        <el-button @click.prevent="removeInp('bltjList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item
                            v-for="(sxzlItem, index) in addProForm.sxzlList"
                            :label="'所需资料' + index"
                            :key="sxzlItem.key"
                            :prop="'sxzlList.' + index + '.name'">
                        <el-input clearable  v-model="sxzlItem.name" placeholder="请输入所需资料"></el-input>
                        <el-button @click="addInp('sxzlList',index)" v-if="index == 0">新增所需资料</el-button>
                        <el-button @click.prevent="removeInp('sxzlList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item
                            v-for="(bllcItem, index) in addProForm.bllcList"
                            :label="'办理流程' + index"
                            :key="bllcItem.key"
                            :prop="'bllcList.' + index + '.name'">
                        <el-input clearable  v-model="bllcItem.name" placeholder="请输入办理流程"></el-input>
                        <el-button @click="addInp('bllcList',index)" v-if="index == 0">新增办理流程</el-button>
                        <el-button @click.prevent="removeInp('bllcList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item
                            v-for="(otherinfoItem, index) in addProForm.ohterInfoList"
                            :label="'其它信息' + index"
                            :key="otherinfoItem.key"
                            :prop="'ohterInfoList.' + index + '.name'">
                        <el-input clearable  v-model="otherinfoItem.name" placeholder="请输入其它信息"></el-input>
                        <el-button @click="addInp('ohterInfoList',index)" v-if="index == 0">新增其它信息</el-button>
                        <el-button @click.prevent="removeInp('ohterInfoList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>

                <li>
                    <el-form-item
                            v-for="(zxyqItem, index) in addProForm.zxyqList"
                            :label="'征信要求' + index"
                            :key="zxyqItem.key"
                            :prop="'zxyqList.' + index + '.name'">
                        <el-input clearable  v-model="zxyqItem.name" placeholder="请输入征信要求"></el-input>
                        <el-button @click="addInp('zxyqList',index)" v-if="index == 0">新增征信要求</el-button>
                        <el-button @click.prevent="removeInp('zxyqList',index)" v-if="index != 0">删除</el-button>
                    </el-form-item>
                </li>
            </ul>

            <el-form-item class="sub-item compare-submit">
                <el-button type="primary" @click="onSubmit"  :loading="loadState.searchLoad">立即添加</el-button>
            </el-form-item>
        </el-form>

        <matchCompare v-if="showState.matchCompare" :product_id="product_id"></matchCompare>
    </div>
</template>

<script>
    import matchCompare from "./matchCompare";
    import {addProduct, imgUpload} from '@/assets/js/api'

    export default {
        name: "matchIndex",
        data() {
            return {
                srcList:[],

                loadState: {    //按钮状态
                    searchLoad:false
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
                    {id: '3', name: '小额贷款'},
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

                    // 产品标签1
                    labelList: [
                        {name: '', id: '', productId: ''},
                    ],

                    //基本信息
                    basicInfoList: [
                        {name: '', nameValue: "", id: '', productId: ''},
                    ],

                    //还款期数
                    qsList: [
                        {name: '', nameValue: "", id: '', productId: ''},
                    ],

                    quotaDo: {
                        // quotaDo:0, //额度
                        id: '',
                        minQuota: 0,  //最小额度
                        maxQuota: 0, //最大额度
                        step: 0, //间隔额度
                        defaultQuota: 0, //默认额度
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
                    ohterInfoList: [
                        {name: '', nameValue: '', id: '', productId: ''},
                    ],

                    //征信要求
                    zxyqList: [
                        {name: '', nameValue: '', id: '', productId: ''},
                    ],

                    //免责声明
                    mzsmDo: {
                        name: '',
                        id: '',
                        productId: '',
                    },
                },

                // imgIco:{},   //logo图片路径
            };
        },
        methods: {
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


            /*删除*/
            removeInp(type, index) {
                this.addProForm[type].splice(index, 1)
            },

            /*添加*/
            addInp(type) {
                console.log(type);
                this.addProForm[type].push({
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
            onSubmit() {
                this.GLOBAL.btnStateChange(this,'loadState','searchLoad');

                console.log(this.addProForm);
                addProduct(this.addProForm).then(res => {
                    console.log(res);
                    let that =this;
                    if(res.status == 'success'){
                        this.$message({
                            message: '添加成功',
                            type: 'success',
                            duration:1500,
                            offset:40,
                        });
                        setTimeout(()=>{
                            this.product_id = res.data.productId;
                            this.showState = {
                                matchIndex: false,
                                matchCompare : true,
                            }
                        },1500)
                    }else{
                        this.$message({
                            message: '添加失败',
                            type: 'error',
                            duration:1500,
                            offset:40,
                        });
                    }


                }).catch(res => {
                    console.log(res);
                })
            }
        },
        created() {
        },

        components:{
            matchCompare,
        }
    }
</script>
