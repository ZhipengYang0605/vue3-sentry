<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const clickBtn = () => {
  router.push('/sub');
  throw new Error('Test页面报错啦！')
}
</script>

<template>
  <h1>我是Test页面</h1>
  <button @click="clickBtn">点我</button>
</template>

<style scoped>
</style>
