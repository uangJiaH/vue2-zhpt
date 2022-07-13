<template>
  <div class="aside-container">
    <el-menu
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-active="activePath"
        :style="{width: isCollapse ? '60px' : '200px'}"
        active-text-color="#ffd04b"
        background-color="#222d32"
        router
        text-color="#fff"
        unique-opened>
      <tree-menus v-for="(item,index) in nav.menus" :key="index" :tree="item"></tree-menus>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TreeMenus from './treemenus'


export default {
  name: '',
  components: {
    TreeMenus
  },

  data() {
    return {}
  },
  computed: {
    ...mapGetters(['nav']),
    activePath() {
      return this.$route.path
    },
    isCollapse() {
      return this.$store.getters.isCollapse
    }

  },
  methods: {},
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
