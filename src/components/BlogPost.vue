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
  border-radius: 5px 5px 0 0;
  padding: 0.5rem;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.7);
  background-color: var(--color-background-soft);
}

.header {
  border-bottom: 2px solid;
  border-color: var(--color-border);
}

.content-container {
  padding-top: 0.5rem;
}
</style>
