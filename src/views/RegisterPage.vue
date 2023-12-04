<script setup lang="ts">
import { reactive } from 'vue'

function onSubmit() {}

const form = reactive({
  username: '',
  password: ''
})
</script>

<template>
  <ElForm :model="form">
    <ElFormItem label="username">
      <ElInput v-model="form.username" />
    </ElFormItem>
    <ElFormItem label="password">
      <ElInput v-model="form.password" type="password" />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="onSubmit">Register</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<style scoped></style>