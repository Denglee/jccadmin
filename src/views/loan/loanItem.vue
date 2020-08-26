<template>

    <div class="layoutR-contain animated fadeIn">
        <div v-show="pageLoan.loanItem">
            <div class="btnNav-contain">
                <navRefush :btnBack="btnLoad.btnBack" class="btnNav-left"></navRefush>
            </div>
            <div class="bgWhite-public">

                <header class="index-item-title">列表</header>
                <div class="bgWhite-padd20">

                    <el-table class="pub-table" :data="productTable" border >
                        <!--ref="multipleTable"-->
                        <el-table-column type="index" label="序号" width="55"></el-table-column>
                        <el-table-column prop="ioc" label="ioc">
                            <template slot-scope="scope">
                                <el-image style="height: 80px;" :src="scope.row.ioc"
                                ></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="name"></el-table-column>

                        <el-table-column prop="prodType" label="prodType">
                            <template slot-scope="scope">
                                <div v-if="scope.row.prodType == 0">0</div>
                                <div v-if="scope.row.prodType == 1">1</div>
                                <div v-if="scope.row.prodType == 2">2</div>
                                <div v-if="scope.row.prodType == 3">3</div>
                                <div v-if="scope.row.prodType == 4">4</div>
                                <div v-if="scope.row.prodType == 5">5</div>
                            </template>
                        </el-table-column>

                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button size="small" @click="FnGoLoanDetail(scope.$index, scope.row)">
                                    <i class="el-icon-edit"></i>获取详情
                                </el-button>
                                <el-button size="small" @click="FnGoLoanMatch(scope.$index, scope.row)">
                                    <i class="el-icon-delete"></i>获取匹配
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </div>
            </div>
        </div>

        <comLoanDetail v-show="pageLoan.comLoanDetail"  @GoBack="goBack(arguments)"></comLoanDetail>
        <comLoanMatch  v-show="pageLoan.comLoanMatch"  @GoBack="goBack(arguments)"></comLoanMatch>

    </div>

</template>

<script>

    import {getProductForPageApi, } from "../../assets/js/api";
    import navRefush from '@/components/navRefush/navRefush' /*按钮组件  */
    import comLoanDetail from "./comLoanDetail";
    import comLoanMatch from "./comLoanMatch";
    export default {
    	inject:['reLoad'],
        name: "loanItem",
        data() {
            return {
	            btnLoad:{
		            btnBack:false,
                },
                pageLoan: {
	                loanItem:true,
	                comLoanDetail:false,
	                comLoanMatch:false,
                },

	            /*数据列表 */
	            productTable: [],

                loanParm: {
                    pageNum:1,
                    pageSize:10,
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
		        this.pageLoan[indexPage] = false;
		        this.pageLoan[nowPage] = true;
	        },
            
            /*去详情*/
	        FnGoLoanDetail(index, row) {
                let loanDetailParm = {
	                prodId:row.id,
	                productId:row.prodType,
                    NowPageName:'LoanDetail',
                };
                sessionStorage.setItem('loanDetailParm',JSON.stringify(loanDetailParm));
                this.pageShow('comLoanDetail','loanItem');

            },

            /*去匹配*/
	        FnGoLoanMatch(index, row) {
                console.log(index, row);
		        let loanDetailParm = {
			        productId:row.id,
			        NowPageName:'LoanMatch',
		        };
		        sessionStorage.setItem('loanDetailParm',JSON.stringify(loanDetailParm));
		        this.pageShow('LoanMatch','loanItem');

            },


	        // Z1 返回上一页
	        goBack(val){
		        /*console.log(val[0]);*/
		        let indexPage = val[0];
		        this.pageShow(indexPage,'loanItem',);
		        sessionStorage.removeItem('loanDetailParm');

		        // if(this.orderTable.length == 0){
			    //     this.FnGetOrderList();
		        // }

	        },

        },
        created() {
        	this.FnGetProductForPage();
	
	        let  CookiePageLoan = JSON.parse(sessionStorage.getItem('loanDetailParm'));
	        console.log(CookiePageLoan);
	        if(CookiePageLoan){  //有存 则显示orderInfo页面
		        this.pageShow(CookiePageLoan.NowPageName,'loanItem');
	        } else {  //没有 则是在InfoList ，请求接口
		        this.pageShow('loanItem',CookiePageLoan.NowPageName);
	        }
        },
	    components: {
	        navRefush,
	        comLoanDetail,
            comLoanMatch,
        }
    };
</script>
