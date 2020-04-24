<template>
    <div class="pub-box">

        <el-form
                ref="form"
                :inline="true"
                label-width="80px">
            <div v-for="(item, index) in dynamicItem" :key="index">
                <el-form-item v-if="index == 0"
                        label="姓名"
                        :prop="dynamicItem.name">
                    <el-input v-model="item.name"></el-input>
                    <el-button @click="addItem" type="primary">增加</el-button>
                </el-form-item>

                <el-form-item v-else  :prop="dynamicItem.name">
                    <el-input v-model="item.name"></el-input>
                    <i class="el-icon-delete" @click="deleteItem(item, index)"></i>
                </el-form-item>
            </div>

            <el-button @click="onSubmit" type="primary">31321</el-button>
        </el-form>



    </div>
</template>

<script>
    export default {
        name: "bankDetails",
        data() {
            return {

                dynamicItem: [
                    {name: ''},
                ]

            }
        },
        methods: {
            addItem () {
                this.dynamicItem.push({
                    name: '',
                })
            },
            deleteItem (item, index) {
                console.log(index);
                this.dynamicItem.splice(index, 1)
            },

            onSubmit() {
                console.log(this.dynamicItem);
            }
        },
        created() {

        },
    }
</script>
