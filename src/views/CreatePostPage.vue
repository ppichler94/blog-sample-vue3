<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import { useField, useForm } from 'vee-validate'
import FormInputText from '@/components/FormInputText.vue'
import FormTextarea from '@/components/FormTextarea.vue'
import { type Post, PostService } from '@/views/PostService'

const service = new PostService()

const toast = useToast()
const { handleSubmit, resetForm } = useForm<Post>()
useField('title', (value) => !!value)

const onSubmit = handleSubmit(async (values) => {
  try {
    await service.createPost(values.title, values.content)
    toast.add({
      severity: 'info',
      summary: 'Post created',
      detail: `title: ${values.title}`,
      life: 3000
    })
    resetForm()
  } catch (e) {
    toast.add({
      severity: 'error',
      summary: 'Error creating post',
      detail: e.message,
      life: 3000
    })
  }
})
</script>

<template>
  <div class="card flex justify-content-center mt-6">
    <form @submit="onSubmit" class="flex flex-column gap-3 w-6">
      <FormInputText name="title" label="Title" />
      <FormTextarea
        name="content"
        label="Content (CommonMark supported)"
        type="textarea"
        :rows="8"
      />
      <PvButton type="submit" label="Create" />
    </form>
  </div>
</template>

<style scoped></style>