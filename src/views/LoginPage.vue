<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'

interface LoginForm {
  username: string
  password: string
}

const toast = useToast()
const { handleSubmit, resetForm } = useForm<LoginForm>()
const username = useField<string>('username', (value) => !!value).value
const password = useField<string>('password', (value) => !!value).value

const onSubmit = handleSubmit((values) => {
  toast.add({
    severity: 'info',
    summary: 'Form submitted',
    detail: `user: ${values.username} password: ${values.password}`,
    life: 3000
  })
  resetForm()
})
</script>

<template>
  <div class="card flex justify-content-center mt-4">
    <form @submit="onSubmit" class="flex flex-column gap-4">
      <span class="p-float-label">
        <InputText id="username" name="username" type="text" v-model="username" />
        <label for="username">Username</label>
      </span>

      <span class="p-float-label">
        <InputText id="password" type="password" v-model="password" />
        <label for="password">Password</label>
      </span>

      <PvButton type="submit" label="Submit" />
    </form>
  </div>
</template>

<style scoped></style>