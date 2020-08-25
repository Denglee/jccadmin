<template>
    <div>
        <div v-if="loanArr.length == 0">先选择要编辑的id</div>

        <el-form
                v-else
                ref="form"
                :inline="true"
                class="pub-form"
                label-width="80px"
        >
            <div v-for="(item, index) in loanArr.listArr" :key="index">
                <el-form-item v-if="index == 0" label="姓名" :prop="loanArr.name">
                    <el-input v-model="item.name"></el-input>
                    <el-button @click="addItem" type="primary">增加</el-button>
                </el-form-item>

                <el-form-item v-else :prop="loanArr.name" :label="'姓名' + (index + 1)">
                    <el-input v-model="item.name"></el-input>
                    <el-button @click="deleteItem(item, index)" type="primary">
                        <i class="el-icon-delete"></i>删除
                    </el-button>
                </el-form-item>
            </div>
            <el-form-item prop="loanArr.list">
                <el-input v-model="loanArr.list"></el-input>
            </el-form-item>

            <el-form-item label="活动名称">
                <el-select filterable v-model="loanArr.list" placeholder="请选择卡种">
                    <el-option
                            v-for="item in loanArr.listArr"
                            :key="item.index"
                            :label="item.name"
                            :value="item.id"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-button @click="onSubmit" type="primary">31321</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "loanInfo",
        data() {
            return {
                loanArr: []
            };
        },
        methods: {
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
            let list = this.$route.params.loanList;
            if (list) {
                console.log(list);
                this.loanArr = list;
            }
        }
    };
</script>
