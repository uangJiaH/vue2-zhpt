<template>
  <div class="header-container">
    <div class="left">
      <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          effect="dark">
        {{ item.label }}
      </el-tag>
    </div>
    <div class="right">
      <el-avatar :src="$store.getters.userInfo.avatar"></el-avatar>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ $store.getters.userInfo.username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item>安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      items: [
        {type: '', label: '标签一'},
        {type: 'success', label: '标签二'},
        {type: 'info', label: '标签三'},
        {type: 'danger', label: '标签四'},
        {type: 'warning', label: '标签五'}
      ]
    }
  },
  methods: {

    // handleLogout() {
    //   this.$store.dispatch('user/loginOut')
    //   this.$router.push('/login')
    //   console.log('123')
    // }
    // handleCommand(command) {
    //   this.$store.dispatch('user/loginOut')
    //   this.$router.push('/login')
    //   console.log('123')
    // }
  },

}
</script>

<style lang="scss" scoped>
.header-container {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  height: 60px;
}

.right {
  line-height: 60px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .img {
    height: 100%;
    vertical-align: middle;
    display: inline-block;
    margin-right: 10px;
  }

  .el-dropdown {
    margin-left: 10px;
    font-size: 15px;
  }
}

</style>
