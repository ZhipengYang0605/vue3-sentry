<script setup lang="ts">
const clickBtn = () => {
  throw new Error('SubTest页面报错啦！');
}
</script>

<template>
  <h1>我是SubTest页面</h1>
  <button @click="clickBtn">点我</button>
</template>

<style scoped>
</style>
