<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import { useForm } from 'vee-validate'
import FormInput from '@/components/FormInput.vue'

interface LoginForm {
  username: string
  password: string
  passwordRepeat: string
}

const toast = useToast()
const { handleSubmit, resetForm } = useForm<LoginForm>()
const onSubmit = handleSubmit((values, actions) => {
  if (values.password != values.passwordRepeat) {
    actions.setFieldError('passwordRepeat', 'Passwords must be equal')
    return
  }
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
    <form @submit="onSubmit" class="flex flex-column gap-2">
      <FormInput name="username" label="Username" />
      <FormInput name="password" label="Password" type="password" />
      <FormInput name="passwordRepeat" label="Repeat password" type="password" />
      <PvButton type="submit" label="Register" />
    </form>
  </div>
</template>

<style scoped></style>