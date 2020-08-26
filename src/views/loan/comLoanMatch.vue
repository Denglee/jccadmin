<template>
    <div class="layoutR-contain animated fadeIn">
        <div class="btnNav-contain">
            <navRefush :btnBack="btnLoad.btnBack" class="btnNav-left" @SecondBack="BtnSecondBack"></navRefush>
        </div>
        <div class="bgWhite-public bg-orderInfo">

            <header class="index-item-title">订单信息</header>
            <div class="bgWhite-padd20">

            </div>
        </div>

    </div>
</template>

<script>
	import navRefush from '@/components/navRefush/navRefush' /*按钮组件  */

	export default {
		name: "comLoanMatch",
		data() {
			return {
				loanArr: [],

				btnLoad:{
					btnBack:true,
				},

			};
		},
		methods: {
			// Z1 返回上一页
			BtnSecondBack(){
				console.log('返回点击事件');
				this.$emit('GoBack','comLoanDetail');
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

			onSubmit() {
				console.log(this.dynamicItem);
			}
		},
		created() {
			let  CookiePageLoan = JSON.parse(sessionStorage.getItem('loanDetailParm'));
			console.log(CookiePageLoan);
			if(CookiePageLoan){  //有存 则显示orderInfo页面
				// this.pageShow(CookiePageLoan.NowPageName,'loanItem');

			} else {  //没有 则是在InfoList ，请求接口
				// this.pageShow('loanItem',CookiePageLoan.NowPageName);
			}

		},

        components:{
	        navRefush,
        },

	};
</script>
