<template>
  <div>
    <el-card class="box-card">
      <!--      面包屑-->
      <breadCrumb></breadCrumb>
      <!--      分割线-->
      <el-divider></el-divider>
      <!--            搜索-->
      <div class="search">
        <el-input v-model="input" class="inputcc" placeholder="请输入内容" size="medium " style="width: 200px"></el-input>
        <el-button size="medium" type="success">查询</el-button>
      </div>

      <!--      表格-->
      <my-table :data="tableData" :rules="columns">
        <template v-slot:avatar="{row}">
          <el-avatar :size="size" :src="row.avatar"></el-avatar>
        </template>
        <template v-slot:roles="{row}">
          <el-tag v-for="item in row.roles" :key="item.id">{{ item.name }}</el-tag>
        </template>
        <template v-slot:status="{row}">
          <el-switch
              v-model="row.status"
              active-color="#13ce66"
              inactive-color="#ff4949">
          </el-switch>
        </template>
        <template v-slot:operating="{row}">
          <el-button plain size="mini" type="success">编辑</el-button>
          <el-button plain size="mini" type="warning">分配角色</el-button>
          <el-button plain size="mini" type="danger">删除</el-button>

        </template>
      </my-table>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from '../../components/breadcrumb'
import MyTable from '@/components/MyTable'
import UserApi from '@/api/user'
import {columns} from "@/views/users/table";

export default {
  components: {
    breadCrumb,
    MyTable
  },
  data() {
    return {
      columns,
      tableData: [],
      // 搜索
      pageModel: {
        username: ''
      }
    }
  },
  methods: {
    async getlist() {
      const {records} = await UserApi.getUserList()
      console.log(records, 'getlist')
      this.tableData = records
    }
  },
  created() {
    this.getlist()
  }

}

</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 10px;

  .inputcc {
    margin-left: 20px;
  }
}
</style>
