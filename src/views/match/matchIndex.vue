<template>
    <div class="pub-box">
        <el-form ref="addProForm" :model="addProForm" label-width="100px" class="pub-form addProForm">

            <div class="addPro-item">
                <el-form-item label="产品名称">
                    <el-input v-model="addProForm.name" placeholder="输入框"></el-input>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item label="产品类型">
                    <el-select filterable v-model="addProForm.loan_type" placeholder="请选择产品类型">
                        <el-option
                                v-for="item in loanType"
                                :key="item.index"
                                :label="item.name"
                                :value="item.id"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item
                        v-for="(domain, index) in addProForm.label"
                        :label="'产品标签' + index"
                        :key="domain.key"
                        :prop="'label.' + index + '.value'">
                    <el-input v-model="domain.value" placeholder="请输入标签1"></el-input>
                    <el-button @click="addInp('label',index)" v-if="index == 0">新增标签</el-button>
                    <el-button @click.prevent="removeInp('label',index)" v-if="index != 0">删除</el-button>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item
                        v-for="(basicItem, index) in addProForm.basicinfo"
                        :label="'基本信息' + index"
                        :key="basicItem.key"
                        :prop="'basicinfo.' + index + '.value'">
                    <el-input v-model="basicItem.value" placeholder="请输入基本信息"></el-input>
                    <el-button @click="addInp('basicinfo',index)" v-if="index == 0">新增基本信息</el-button>
                    <el-button @click.prevent="removeInp('basicinfo',index)" v-if="index != 0">删除</el-button>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item
                        v-for="(hkqsItem, index) in addProForm.hkqs"
                        :label="'还款期数' + index"
                        :key="hkqsItem.key"
                        :prop="'hkqs.' + index + '.value'">
                    <el-input v-model="hkqsItem.value" placeholder="请输入还款期数"></el-input>
                    <el-button @click="addInp('hkqs',index)" v-if="index == 0">新增还款期数</el-button>
                    <el-button @click.prevent="removeInp('hkqs',index)" v-if="index != 0">删除</el-button>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item label="额度">
                    <el-input v-model="addProForm.quota" placeholder="额度"></el-input>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item label="最小额度">
                    <el-input v-model="addProForm.min_quota" placeholder="最小额度"></el-input>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item label="最大额度">
                    <el-input v-model="addProForm.max_quota" placeholder="最大额度"></el-input>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item label="额度间隔">
                    <el-input v-model="addProForm.step" placeholder="额度间隔"></el-input>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item label="额度默认值">
                    <el-input v-model="addProForm.default" placeholder="额度默认值"></el-input>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item
                        v-for="(label2Item, index) in addProForm.label2"
                        :label="'产品标签2' + index"
                        :key="label2Item.key"
                        :prop="'label2.' + index + '.value'">
                    <el-input v-model="label2Item.value" placeholder="请输入标签2"></el-input>
                    <el-button @click="addInp('label2',index)" v-if="index == 0">新增标签2</el-button>
                    <el-button @click.prevent="removeInp('label2',index)" v-if="index != 0">删除</el-button>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item
                        v-for="(bltjItem, index) in addProForm.bltj"
                        :label="'办理条件' + index"
                        :key="bltjItem.key"
                        :prop="'hkqs.' + index + '.value'">
                    <el-input v-model="bltjItem.value" placeholder="请输入办理条件"></el-input>
                    <el-button @click="addInp('bltj',index)" v-if="index == 0">新增办理条件</el-button>
                    <el-button @click.prevent="removeInp('bltj',index)" v-if="index != 0">删除</el-button>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item
                        v-for="(sxzlItem, index) in addProForm.sxzl"
                        :label="'所需资料' + index"
                        :key="sxzlItem.key"
                        :prop="'sxzl.' + index + '.value'">
                    <el-input v-model="sxzlItem.value" placeholder="请输入所需资料"></el-input>
                    <el-button @click="addInp('sxzl',index)" v-if="index == 0">新增所需资料</el-button>
                    <el-button @click.prevent="removeInp('sxzl',index)" v-if="index != 0">删除</el-button>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item
                        v-for="(bllcItem, index) in addProForm.bllc"
                        :label="'办理流程' + index"
                        :key="bllcItem.key"
                        :prop="'bllc.' + index + '.value'">
                    <el-input v-model="bllcItem.value" placeholder="请输入办理流程"></el-input>
                    <el-button @click="addInp('bllc',index)" v-if="index == 0">新增办理流程</el-button>
                    <el-button @click.prevent="removeInp('bllc',index)" v-if="index != 0">删除</el-button>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item
                        v-for="(otherinfoItem, index) in addProForm.otherinfo"
                        :label="'其它信息' + index"
                        :key="otherinfoItem.key"
                        :prop="'otherinfo.' + index + '.value'">
                    <el-input v-model="otherinfoItem.value" placeholder="请输入其它信息"></el-input>
                    <el-button @click="addInp('otherinfo',index)" v-if="index == 0">新增其它信息</el-button>
                    <el-button @click.prevent="removeInp('otherinfo',index)" v-if="index != 0">删除</el-button>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item
                        v-for="(zxyqItem, index) in addProForm.zxyq"
                        :label="'征信要求' + index"
                        :key="zxyqItem.key"
                        :prop="'zxyq.' + index + '.value'">
                    <el-input v-model="zxyqItem.value" placeholder="请输入征信要求"></el-input>
                    <el-button @click="addInp('zxyq',index)" v-if="index == 0">新增征信要求</el-button>
                    <el-button @click.prevent="removeInp('zxyq',index)" v-if="index != 0">删除</el-button>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <el-form-item label="免责声明">
                    <el-input v-model="addProForm.mzsm" placeholder="请输入免责声明"></el-input>
                </el-form-item>
            </div>

            <div class="addPro-item">
                <img :src="addProForm.ioc" alt="" v-if="addProForm.ioc" class="img-ico">
                <input type="file" class="face" accept="image/*" @change="upload_photo" ref="inputer">
            </div>



            <el-form-item class="sub-item compare-submit">
                <el-button type="primary" @click="onSubmit">添加</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {addProduct, imgUpload} from '@/assets/js/api'

    export default {
        name: "matchIndex",
        data() {
            return {

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
                addProForm: {
                    name: "",
                    loan_type: '',   //类型
                    ioc: '',  //银行logo   上传回显的路径
                    label: [
                        {value: ''},
                    ],
                    basicinfo: [
                        {value: ''},
                    ], //基本信息
                    hkqs: [
                        {value: ''},
                    ], //还款期数
                    quota: '', //最小额度
                    min_quota: '', //最小额度
                    max_quota: '', //最大额度
                    step: '', //间隔额度
                    default: '', //默认额度
                    label2: [
                        {value: ''},
                    ], //产品标签2
                    bltj: [
                        {value: ''},
                    ], //办理条件
                    sxzl: [
                        {value: ''},
                    ], //所需资料
                    bllc: [
                        {value: ''},
                    ], //办理流程
                    otherinfo: [
                        {value: ''},
                    ], //其它信息
                    zxyq: [
                        {value: ''},
                    ], //征信要求
                    mzsm: '', //免责声明
                },

                // imgIco:{},   //logo图片路径
            };
        },
        methods: {
            upload_photo: function(){
                var that = this;

                var inputDOM = that.$refs.inputer;
                var file = inputDOM.files;

                var formData = new FormData();
                formData.append('file', file[0]);

                imgUpload(formData,).then(res=>{
                    console.log(res);
                    this.addProForm.ioc = res;
                }).catch(res=>{
                    console.log(res);
                })

                // $.ajax({
                //     url: url,
                //     type: "post",
                //     data: formData ,
                //     processData: false,
                //     contentType: false,
                //     success: function(data) {},
                //     error: function(error){}
                // });
            },



            changeFile(event) {
                let fileData =event.target.files[0];
                // console.log(file.name);
                // this.file = file;

                setTimeout(function(){
                    console.log(fileData);
                    imgUpload({
                        file:fileData,
                    }).then(res=>{
                        console.log(res);
                    }).catch(res=>{
                        console.log(res);
                    })
                },1500)

            },


            handleRemove(file, fileList) {//移除图片
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {//预览图片时调用
                console.log(file);
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },

            beforeAvatarUpload(file) {//文件上传之前调用做一些拦截限制
                console.log(file);
                const isJPG = true;
                // const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                // if (!isJPG) {
                //   this.$message.error('上传头像图片只能是 JPG 格式!');
                // }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },

            handleAvatarSuccess(res, file) {//图片上传成功
                console.log(res);
                console.log(file);
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            handleExceed(files, fileList) {//图片上传超过数量限制
                this.$message.error('上传图片不能超过6张!');
                console.log(file, fileList);
            },
            imgUploadError(err, file, fileList){//图片上传失败调用
                console.log(err)
                this.$message.error('上传图片失败!');
            },





            /*删除*/
            removeInp(type, index) {
                this.addProForm[type].splice(index, 1)
            },

            /*添加*/
            addInp(type) {
                this.addProForm[type].push({
                    value: '',
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
                console.log(this.addProForm);
                addProduct(this.addProForm).then(res => {
                    console.log(res);
                }).catch(res => {
                    console.log(res);
                })
            }
        },
        created() {
        }
    }
</script>

<style lang="scss">
    .img-ico{
        height: 120px;
    }
</style>