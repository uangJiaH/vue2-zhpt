<template>
  <div class="aside-container">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#222d32"
        default-active="0"
        text-color="#fff">
      <el-menu-item index="1-4">
        <i class="el-icon-location"></i>
        <template slot="title">控制台</template>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>

        <el-menu-item index="1-4">
          <i class="el-icon-setting"></i>
          <template slot="title">用户管理</template>
        </el-menu-item>
        <el-menu-item index="1-4">
          <i class="el-icon-setting"></i>
          <template slot="title">角色管理</template>
        </el-menu-item>
        <el-menu-item index="1-4">
          <i class="el-icon-setting"></i>
          <template slot="title">菜单管理</template>
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.el-menu {
  background-color: #222d32;
  border-right: 0;
}

.el-submenu__title:hover {
  background-color: rgb(34, 45, 50);
}
</style>
