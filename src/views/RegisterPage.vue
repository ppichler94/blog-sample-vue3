<script setup lang="ts">
import { type Path, useForm } from 'vee-validate'
import FormInput from '@/components/FormInputText.vue'
import UserService from '@/views/UserService'
import MessageService from '@/views/MessageService'
import type MessageError from '@/views/MessageError'

interface LoginForm {
  username: string
  password: string
  passwordRepeat: string
}

const service = new UserService()
const messageService = new MessageService()

const { handleSubmit, resetForm } = useForm<LoginForm>()
const onSubmit = handleSubmit(async (values, actions) => {
  if (values.password != values.passwordRepeat) {
    actions.setFieldError('passwordRepeat', 'Passwords must be equal')
    return
  }
  try {
    await service.addUser(values.username, values.password)
    messageService.success('User created')
    resetForm()
  } catch (e: unknown) {
    const error = e as MessageError
    if (error.field) {
      const field = error.field as Path<LoginForm>
      actions.setFieldError(field, error.detail)
    }
    messageService.displayError(error)
  }
})
</script>

<template>
  <div class="card flex justify-content-center mt-6">
    <form @submit="onSubmit" class="flex flex-column gap-3">
      <FormInput name="username" label="Username" />
      <FormInput name="password" label="Password" type="password" />
      <FormInput name="passwordRepeat" label="Repeat password" type="password" />
      <PvButton type="submit" label="Register" />
    </form>
  </div>
</template>

<style scoped></style>