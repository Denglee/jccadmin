<template>
  <div class="pub-box">
    <el-form ref="form" :inline="true" class="pub-form" label-width="80px">
      <div v-for="(item, index) in dynamicItem" :key="index">
        <el-form-item v-if="index == 0" label="姓名" :prop="dynamicItem.name">
          <el-input v-model="item.name"></el-input>
          <el-button @click="addItem" type="primary">增加</el-button>
        </el-form-item>

        <el-form-item
          v-else
          :prop="dynamicItem.name"
          :label="'姓名' + (index + 1)"
        >
          <el-input v-model="item.name"></el-input>
          <el-button @click="deleteItem(item, index)" type="primary">
            <i class="el-icon-delete"></i>删除
          </el-button>
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
        { id: 1, name: "多么门厅" },
        { id: 2, name: "是给我一般的" }
      ]
    };
  },
  methods: {
    addItem() {
      this.dynamicItem.push({
        name: ""
      });
    },
    deleteItem(item, index) {
      console.log(index);
      this.dynamicItem.splice(index, 1);
    },

    onSubmit() {
      console.log(this.dynamicItem);
    }
  },
  created() {}
};
</script>
