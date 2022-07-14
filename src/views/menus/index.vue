<template>
  <div>
    <el-card class="box-card">
      <!--      面包屑-->
      <breadCrumb></breadCrumb>
      <!--      分割线-->
      <el-divider></el-divider>
      <div class="search">
        <Input v-model="pageModel.name" enter-button="查询" inline placeholder="请输入用户名" search
               @on-search="getUserList"/>
        <Button type="primary">新增</Button>

      </div>
      <div class="table">
        <Table :columns="columns" :data="userList" :loading="loading" border row-key="id">
          <template slot="type" slot-scope="{ row }">
            <el-tag v-if="row.type===0" color="primary" type="success">目录</el-tag>
            <el-tag v-if="row.type===1" color="success">菜单</el-tag>
            <el-tag v-if="row.type===2" color="error" type="danger">按钮</el-tag>
          </template>
          <template slot="status" slot-scope="{ row }">
            <i-switch :value="row.status===1"/>
          </template>
          <template slot="operating" slot-scope="{ row }">
            <el-button plain size="mini" type="success">编辑</el-button>
            <el-button plain size="mini" type="danger">删除</el-button>
          </template>
        </Table>

      </div>
    </el-card>
  </div>
</template>

<script>
import userApi from "@/api/user";
import {columns} from './TableColumns'
import breadCrumb from '@/components/breadcrumb'

export default {
  components: {
    breadCrumb
  },
  data() {
    return {
      loading: false,
      userList: [],
      pageModel: {
        current: 1,
        size: 20,
        name: ''
      },
      columns,
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    async getUserList() {
      try {
        this.loading = true
        const res = await userApi.getMenuList(this.pageModel)
        console.log(res, '菜单')
        this.userList = res
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
  },
}
</script>

<style lang='scss' scoped>
.search {
  width: 350px;
  display: flex;


}

.ivu-btn {
  margin-left: 10px;
}

.page {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.table {
  margin-top: 10px;
}
</style>
