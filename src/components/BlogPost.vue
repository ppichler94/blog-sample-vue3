<script setup lang="ts">
import { ref } from 'vue'
import MarkdownIt from 'markdown-it'

const props = defineProps<{
  title: string
  content: string
}>()

const renderedContent = ref('')
const md = new MarkdownIt()
renderedContent.value = md.render(props.content)
</script>

<template>
  <div class="content-host">
    <h1 class="header">{{ title }}</h1>
    <div class="content-container" v-html="renderedContent" />
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