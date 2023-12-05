<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'
import FormInputText from '@/components/FormInputText.vue'
import FormTextarea from '@/components/FormTextarea.vue'

interface Post {
  title: string
  content: string
}

const toast = useToast()

const { handleSubmit, resetForm } = useForm<Post>()
useField('title', (value) => !!value)

const onSubmit = handleSubmit((values, actions) => {
  toast.add({
    severity: 'info',
    summary: 'Post created',
    detail: `title: ${values.title}`,
    life: 3000
  })
  resetForm()
})
</script>

<template>
  <div class="card flex justify-content-center mt-4">
    <form @submit="onSubmit" class="flex flex-column gap-2">
      <FormInputText name="title" label="Title" />
      <FormTextarea name="content" label="Content" type="textarea" />
      <PvButton type="submit" label="Create" />
    </form>
  </div>
</template>

<style scoped></style>