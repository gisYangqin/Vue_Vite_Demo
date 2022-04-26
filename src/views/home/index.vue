<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main
        <p>
        {{ $store.state.count }}
        </p>
        <el-button>测试按钮</el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import User from '@/api/user'

const store = useStore()
console.log(store)
console.log(User)

</script>

<style lang="scss" scoped>
@import '@/style/variable.scss';

h1{
    color: $color-red;
}
</style>
