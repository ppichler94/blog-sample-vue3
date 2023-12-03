<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>

<template>
  <div class="content-host">
    <h1 class="header">{{ title }}</h1>
    <p class="content-container">{{ content }}</p>
  </div>
</template>

<style scoped>
.content-host {
  border: 1px solid;
  border-color: var(--color-border);
  border-radius: 5px;
  padding: 0.5rem;
}

.header {
  border-bottom: 2px solid;
  border-color: var(--color-border);
}

.content-container {
  padding-top: 0.5rem;
}
</style>
