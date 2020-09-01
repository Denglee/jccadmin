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

                        <el-input placeholder="产品名称" v-model="loanParm.productName" class="ptScreen-input" clearable></el-input>

                        <el-select  filterable v-model="loanParm.productType" placeholder="产品种类" class="sel-status">
                            <el-option v-for="(item,index) in loanType" :key="index" :label="item.name" :value="item.id"></el-option>
                        </el-select>

                        <el-button icon="el-icon-search" @click="btnSeaOrder" :loading="btnLoad.searchLoad" class="btn-public">搜索</el-button>
                    </div>

                    <el-table class="pub-table edit-table" :data="productTable" border >
                        <!--ref="multipleTable"-->
                        <el-table-column type="index" label="序号" width="55"></el-table-column>
                        <el-table-column prop="ioc" label="ioc">
                            <template slot-scope="scope">
                                <el-image class="loanList-ioc" :src="scope.row.ioc"></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="产品名称"></el-table-column>

                        <el-table-column prop="prodType" label="产品种类">
                            <template slot-scope="scope">
                                <div v-for="(item,index) in loanType">
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
                                    <i class="el-icon-edit"></i>修改详情
                                </el-button>
                                <el-button size="small" @click="FnGoLoanMatch(scope.$index, scope.row)">
                                    <i class="el-icon-view"></i>修改匹配
                                </el-button>


                                <el-button size="small" v-popover:popover>
                                    <i class="el-icon-delete"></i>删除
                                </el-button>
                                <el-popover
                                        ref="popover"
                                        placement="top"
                                        width="200"
                                        trigger="click">
                                    <p>确定删除吗？</p>
                                    <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                        <el-button type="primary" size="mini" @click="FnDeteleLoan(scope.$index, scope.row)" :loading="btnLoad.btnSureDel">确定</el-button>
                                    </div>
                                </el-popover>


                            </template>
                        </el-table-column>
                    </el-table>

                    <el-pagination
                            background
                            layout="prev, pager, next,total,jumper"
                            :total="pageTotal"
                            :page-size="loanParm.pageSize"
                            @current-change="PageCurrent">
                    </el-pagination>

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
                visible: false,

	            btnLoad:{
		            btnBack:false,
		            searchLoad:false,

                    sureDel:false,
                    btnSureDel:false,
                },
                pageLoan: {
	                loanList:true,
	                comLoanDetail:false,
	                comLoanMatch:false,
                },

	            loanType: [
		            {id: '', name: '全部'},
		            {id: '1', name: '银行信贷'},
		            {id: '2', name: '机构信贷'},
		            // {id: '3', name: '小额贷款'},
		            {id: '4', name: '企业贷款'},
		            {id: '5', name: '抵押贷款'},
		            {id: '6', name: '线上急融'},
	            ],

	            /*数据列表 */
	            productTable: [],

                pageTotal:0,
                loanParm: {
                    pageNum:1,
                    pageSize:10,
	                productName:'',
	                productType:'',
                }
            };
        },
        methods: {
        	// 获取接口
	        FnGetProductForPage(){
	            let loanParmEnd = {};
	            if( this.loanParm.productName ){
	                console.log('res');
                    loanParmEnd.productName = this.loanParm.productName;
                }
                if( this.loanParm.productType ){
                    loanParmEnd.productType = this.loanParm.productType;
                }
                loanParmEnd.pageNum = this.loanParm.pageNum;
                loanParmEnd.pageSize = this.loanParm.pageSize;
                console.log(loanParmEnd);
		        getProductForPageApi(loanParmEnd).then(res=>{
		        	console.log(res.data);
		        	this.productTable = res.data.employees;
		        	this.pageTotal = res.data.total;
                }).catch(res=>{
                	console.log(res);
                })
            },

            /*分页*/
            PageCurrent(page) {
                console.log(page);
                this.loanParm.pageNum = page;
                this.FnGetProductForPage();
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
                this.GLOBAL.btnStateChange(this,'btnLoad','btnSureDel')
            	console.log(val);
	            deleteProductApi({
		            productId:val.id,
                }).then(res=>{
	            	console.log(res);
                    this.$message({
                        message: '删除成功',
                        type: 'success',
                        duration:1500,
                        offset:40,
                    });

	            	setTimeout(()=>{
	            	    this.reLoad()
                    },1000)
                }).catch(res=>{
                	console.log(res);
                })
            },

            /*搜索*/
	        btnSeaOrder(){
                this.GLOBAL.btnStateChange(this,'btnLoad','searchLoad')
                this.FnGetProductForPage();
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
