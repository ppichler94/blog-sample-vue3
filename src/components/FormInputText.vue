<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
  label: string
}>()
const { value, errorMessage } = useField<string>(props.name)
</script>

<template>
  <span class="p-float-label">
    <InputText v-bind="$attrs" v-model="value" :class="{ 'p-invalid': errorMessage }" />
    <label>{{ label }}</label>
  </span>
  <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
</template>

<style scoped></style>