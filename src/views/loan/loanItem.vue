<template>
    <div>
        <el-table class="pub-table" :data="loanList" border ref="multipleTable">
            <el-table-column type="index" label="序号" width="55"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="list" label="职位">
                <template slot-scope="scope">
                    <div v-if="scope.row.list == 0">未知</div>
                    <div v-if="scope.row.list == 1">男</div>
                    <div v-if="scope.row.list == 2">女</div>
                </template>
            </el-table-column>
            <el-table-column prop="label" label="职位">
                <template slot-scope="scope">
                    <div v-for="(item, index) in scope.row.label">
                        {{ item.name }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="small" @click="Edit(scope.$index, scope.row)">
                        <i class="el-icon-edit"></i>
                    </el-button>
                    <el-button size="small" @click="Delete(scope.$index, scope.row)">
                        <i class="el-icon-delete"></i>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--编辑弹出-->
        <el-dialog
                :visible.sync="showState.diaLoanForm"
                width="80%"
                :close-on-click-modal="showState.modalClose"
        >
            <loanForm :loanArr="loanArr"></loanForm>
        </el-dialog>
    </div>
</template>

<script>
    import loanForm from "@/views/Loan/loanForm";
    import {getProductForPageApi, getLunbo} from "../../assets/js/api";

    export default {
        name: "loanItem",
        data() {
            return {
                showState: {
                    modalClose: false,
                    diaLoanForm: false
                },

                loanList: [] /*列表*/,

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
		        getProductForPageApi().then(res=>{
		        	console.log(res);
                }).catch(res=>{
                	console.log(res);
                })
            },

	        // 获取接口
	        FnGetAllType(){
		        getLunbo().then(res=>{
			        console.log(res);
		        }).catch(res=>{
			        console.log(res);
		        })
	        },

            Edit(index, row) {
                this.showState.diaLoanForm = true;
                this.loanArr = row;

                /*this.$routerConfigure.push({
                              name:'loanInfo',
                              params:{
                                  'loanList':row,
                              }
                          })*/
            },
            Delete(index, row) {
                console.log(index, row);
                this.loanList.slice(index, 1);
            }
        },
        created() {
        	this.FnGetProductForPage();

        	this.FnGetAllType();
        },
        components: {
            loanForm
        }
    };
</script>
