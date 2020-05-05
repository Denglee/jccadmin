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
export default {
  name: "loanItem",
  data() {
    return {
      showState: {
        modalClose: false,
        diaLoanForm: false
      },

      loanList: [
        {
          typeId: "1",
          name: "大冬",
          list: "1",
          listArr: [
            { id: 1, name: "店长" },
            { id: 2, name: "顾问" },
            { id: 3, name: "教练" }
          ],
          label: [{ name: "教练" }, { name: "顾问" }]
        },
        {
          typeId: "2",
          name: "胡伟",
          list: "2",
          listArr: [
            { id: 1, name: "店长" },
            { id: 2, name: "顾问" },
            { id: 3, name: "教练" }
          ],
          label: [{ name: "教练" }, { name: "顾问" }]
        }
      ] /*列表*/,

      loanArr: {} /*传递的值*/
    };
  },
  methods: {
    Edit(index, row) {
      this.showState.diaLoanForm = true;
      this.loanArr = row;

      /*this.$router.push({
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
  created() {},
  components: {
    loanForm
  }
};
</script>
