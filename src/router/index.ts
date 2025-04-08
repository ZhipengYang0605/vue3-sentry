// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Test from '@/views/Test.vue';
import SubTest from '@/views/SubTest.vue';

const routes = [
  {
    path: '/',
    name: 'Test',
    component: Test
  },
  {
    path: '/sub',
    name: 'SubTest',
    component: SubTest
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router