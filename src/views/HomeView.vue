<script setup lang="ts">
import BlogPost from '@/components/BlogPost.vue'
import { onMounted, ref } from 'vue'
import { type Post, PostService } from '@/views/PostService'

const posts = ref<Post[]>()
const service = new PostService()
onMounted(async () => (posts.value = await service.getPosts()))
</script>

<template>
  <BlogPost
    class="post"
    v-for="post in posts"
    :title="post.title"
    :content="post.content"
    :author="post.author"
    :key="post.id"
  />
</template>

<style scoped>
.post:first-of-type {
  margin-top: 1rem;
}

.post:not(:last-of-type) {
  margin-bottom: 1rem;
}
</style>