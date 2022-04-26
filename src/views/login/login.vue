<template>
    <h2>
        登录页
    </h2>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res.data)
  })
})

</script>

<style lang="scss" scoped>
</style>
