<template>
  <div>
    <el-container>
      <el-aside width="$sideBarWidth" class="sidebar-container">
        <Menu></Menu>
      </el-aside>
      <el-container
        class="container"
        :class="{ hidderContainer: !$store.getters.siderType }"
      >
        <el-header><Headers /></el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './menu'
import Headers from './headers/index.vue'
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
