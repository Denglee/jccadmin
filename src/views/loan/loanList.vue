<template>

    <div class="layoutR-contain animated fadeIn">
        <div v-show="pageLoan.loanList">
            <div class="btnNav-contain">
                <navRefush :btnBack="btnLoad.btnBack" class="btnNav-left"></navRefush>
            </div>
            <div class="bgWhite-public">

                <header class="index-item-title">列表</header>
                <div class="bgWhite-padd20">

                    <div class="pt-screen">

                        <el-input placeholder="productNam" v-model="loanParm.productName" class="ptScreen-input" clearable></el-input>

                        <el-select  filterable v-model="loanParm.productType" placeholder="productType" class="sel-status">
                            <el-option v-for="(item,index) in loanType" :key="index" :label="item.name" :value="item.id"></el-option>
                        </el-select>

                        <el-button icon="el-icon-search" @click="btnSeaOrder" :loading="btnLoad.searchLoad" class="btn-public">搜索</el-button>
                    </div>

                    <el-table class="pub-table edit-table" :data="productTable" border >
                        <!--ref="multipleTable"-->
                        <el-table-column type="index" label="序号" width="55"></el-table-column>
                        <el-table-column prop="ioc" label="ioc">
                            <template slot-scope="scope">
                                <!--<el-image style="height: 80px;" :src="scope.row.ioc"></el-image>-->
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="name"></el-table-column>

                        <el-table-column prop="prodType" label="prodType">
                            <template slot-scope="scope">
                                <div v-for="(item,index) in loanType">
                                    {{scope.row.prodType}}
                                    {{item.id}}
                                    <span v-if="item.id == scope.row.prodType">{{item.name}}</span>
                                </div>
                                <!--<div v-if="scope.row.prodType == 0">0</div>
                                <div v-if="scope.row.prodType == 1">1</div>
                                <div v-if="scope.row.prodType == 2">2</div>
                                <div v-if="scope.row.prodType == 3">3</div>
                                <div v-if="scope.row.prodType == 4">4</div>
                                <div v-if="scope.row.prodType == 5">5</div>-->
                            </template>
                        </el-table-column>

                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button size="small" @click="FnGoLoanDetail(scope.$index, scope.row)">
                                    <i class="el-icon-edit"></i>获取详情
                                </el-button>
                                <el-button size="small" @click="FnGoLoanMatch(scope.$index, scope.row)">
                                    <i class="el-icon-view"></i>获取匹配
                                </el-button>
                                <el-button size="small" @click="FnDeteleLoan(scope.$index, scope.row)">
                                    <i class="el-icon-delete"></i>删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </div>
            </div>
        </div>

        <comLoanDetail v-if="pageLoan.comLoanDetail"  @GoBack="goBack(arguments)"></comLoanDetail>
        <comLoanMatch  v-if="pageLoan.comLoanMatch"  @GoBack="goBack(arguments)"></comLoanMatch>

    </div>

</template>

<script>

    import {getProductForPageApi, deleteProductApi} from "../../assets/js/api";
    import navRefush from '@/components/navRefush/navRefush' /*按钮组件  */
    import comLoanDetail from "./comLoanDetail";
    import comLoanMatch from "./comLoanMatch";
    export default {
    	inject:['reLoad'],
        name: "loanList",
        data() {
            return {
	            btnLoad:{
		            btnBack:false,
		            searchLoad:false,
                },
                pageLoan: {
	                loanList:true,
	                comLoanDetail:false,
	                comLoanMatch:false,
                },

	            loanType: [
		            {id: 1, name: '银行信贷'},
		            {id: 2, name: '机构信贷'},
		            // {id: '3', name: '小额贷款'},
		            {id: 4, name: '企业贷款'},
		            {id: 5, name: '抵押贷款'},
		            {id: 6, name: '线上急融'},
	            ],

	            /*数据列表 */
	            productTable: [],

                loanParm: {
                    pageNum:1,
                    pageSize:10,
	                productName:'',
	                productType:1,
                }
            };
        },
        methods: {
        	// 获取接口
	        FnGetProductForPage(){
		        getProductForPageApi(this.loanParm).then(res=>{
		        	console.log(res.data);
		        	this.productTable = res.data.employees;
                }).catch(res=>{
                	console.log(res);
                })
            },
	
	        // 页面显影方法
	        pageShow(nowPage,indexPage){
		        this.pageLoan[nowPage] = true;
		        this.pageLoan[indexPage] = false;
	        },
            
            /*去详情*/
	        FnGoLoanDetail(index, row) {
                let loanDetailParm = {
	                prodId:row.id,
	                prodType:row.prodType,
                    NowPageName:'comLoanDetail',
                };
                sessionStorage.setItem('loanDetailParm',JSON.stringify(loanDetailParm));
                this.pageShow('comLoanDetail','loanList');

            },

            /*去匹配*/
	        FnGoLoanMatch(index, row) {
                console.log(index, row);
		        let loanDetailParm = {
			        productId:row.id,
			        NowPageName:'comLoanMatch',
		        };
		        sessionStorage.setItem('loanDetailParm',JSON.stringify(loanDetailParm));
		        this.pageShow('comLoanMatch','loanList');

            },


	        // Z1 返回上一页
	        goBack(val){
		        console.log(val[0]);
		        let indexPage = val[0];
		        this.pageShow('loanList',indexPage,);
		        sessionStorage.removeItem('loanDetailParm');


		        if(this.productTable.length == 0){
			        this.FnGetProductForPage();
		        }

	        },

            /*删除*/
            FnDeteleLoan(index,val){
            	console.log(val);
	            deleteProductApi({
		            productId:val.id,
                }).then(res=>{
	            	console.log(res);
                }).catch(res=>{
                	console.log(res);
                })
            },

	        btnSeaOrder(){
            	console.log(this.loanParm);
            },

        },
        created() {
	        let  CookiePageLoan = JSON.parse(sessionStorage.getItem('loanDetailParm'));
	        console.log(CookiePageLoan);
	        if(CookiePageLoan){  //有存 则显示orderInfo页面
	        	console.log(CookiePageLoan.NowPageName)
		        this.pageShow(CookiePageLoan.NowPageName,'loanList');

	        	console.log(this.pageLoan);
	        } else {  //没有 则是在InfoList ，请求接口
		        this.pageLoan = {
			        loanList:true,
                    comLoanDetail:false,
                    comLoanMatch:false,
		        };
		        this.FnGetProductForPage();
	        }
        },
	    components: {
	        navRefush,
	        comLoanDetail,
            comLoanMatch,
        }
    };
</script>
