<script setup lang="ts">
import { useForm } from 'vee-validate'
import FormInput from '@/components/FormInputText.vue'
import UserService from '@/views/UserService'

interface LoginForm {
  username: string
  password: string
}

const service = new UserService()

const { handleSubmit, resetForm } = useForm<LoginForm>()

const onSubmit = handleSubmit(async (values, action) => {
  try {
    await service.login(values.username, values.password)
    resetForm()
  } catch (e: any) {
    action.setFieldError('password', 'Invalid credentials')
  }
})
</script>

<template>
  <div class="card flex justify-content-center mt-4">
    <form @submit="onSubmit" class="flex flex-column gap-2">
      <FormInput name="username" label="Username" />
      <FormInput name="password" label="Password" type="password" />

      <PvButton type="submit" label="Login" />
    </form>
  </div>
</template>

<style scoped></style>