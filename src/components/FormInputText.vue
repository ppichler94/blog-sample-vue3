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
    <InputText
      class="textinput"
      v-bind="$attrs"
      v-model="value"
      :class="{ 'p-invalid': errorMessage }"
    />
    <label>{{ label }}</label>
  </span>
  <small class="p-error -mt-3 mb-3" id="text-error">{{ errorMessage }}</small>
</template>

<style scoped>
.textinput {
  width: 100%;
}
</style>