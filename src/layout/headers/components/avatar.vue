<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="50" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const squareUrl = ref(
  'https://img0.baidu.com/it/u=3204281136,1911957924&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1679504400&t=c638b1fd26cd1cb988b9b18e90431d3d'
)
const store = useStore()
const logout = () => {
  store.dispatch('app/logout')
}
</script>

<style lang="scss" scoped></style>
