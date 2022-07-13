<template>
 <span>
   <el-menu-item v-if="!tree.children||tree.children<=0" :index="tree.path">
     <i :class="'el-icon-'+tree.icon"></i>
     <span slot="title">{{ tree.label }}</span>
    </el-menu-item>
    <el-submenu v-else :index="tree.path">
        <template slot="title">
          <i :class="'el-icon-'+tree.icon"></i>
         <span slot="title">{{ tree.label }}</span>
        </template>

    <el-menu-item v-for="it in tree.children" :key="it.id" :index="it.path">
     <i :class="'el-icon-'+it.icon"></i>
     <span slot="title">{{ it.label }}</span>
    </el-menu-item>
    </el-submenu>

 </span>

</template>

<script>
export default {
  props: ['tree']

}
</script>

<style lang="scss" scoped>

</style>
