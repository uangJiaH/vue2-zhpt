<template>
  <div class="header-container">
    <div class="left">
      <el-button
          :icon="
          $store.getters.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
        "
          size="mini"
          type="text"
          @click="handleCollapseMenu"
      ></el-button>
      <el-tag
          v-for="(tag) in tags"
          :key="tag.path"
          :closable="tag.path !== '/index'"
          :effect="$route.path === tag.path ? 'dark' : 'plain'"
          class="hand"
          size="medium"
          type="warning">
        {{ tag.title }}
      </el-tag>
    </div>
    <div class="right">
      <div class="right-tool-tip">
        <el-tooltip class="full" content="全屏" effect="dark" placement="bottom">
          <i class="el-icon-rank hand white" style="font-size:25px;"></i>
        </el-tooltip>
        <el-tooltip content="关闭全部标签" effect="dark" placement="bottom">
          <i class="el-icon-circle-close hand white" style="font-size:25px;"></i>
        </el-tooltip>
      </div>
      <div class="left-tool-tip">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",

    }
  },
  methods: {

    handleCollapseMenu() {
      this.$store.dispatch('menu/setCollapse')
    },
    handleCommand(command) {
      this.$store.dispatch('user/loginOut')
      this.$router.push('/login')
      console.log('123')
    }
  },
  computed: {
    tags() {
      return this.$store.getters.tags
    }
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

  .el-button {
    font-size: 25px;
    color: #fff;
    margin-top: 5px;
  }
}

.el-tag {
  margin: 0 5px;
}

.right {
  line-height: 60px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-tool-tip {
    height: 100%;
    display: flex;
    align-items: center;

    .full {
      margin-right: 20px;
      // 旋转
      transform: rotate(20deg);
      -webkit-transform: rotate(20deg);
      /*兼容-webkit-引擎浏览器*/
      -moz-transform: rotate(20deg);
      /*兼容-moz-引擎浏览器*/
    }
  }

  .left-tool-tip {
    vertical-align: middle;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .img {
      height: 100%;
      margin-right: 10px;

    }

    .el-dropdown {
      margin-left: 10px;
      font-size: 15px;
    }

    .el-dropdown-link {
      color: #fff;
      font-weight: bold;

    }
  }


}

</style>
