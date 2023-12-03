<script setup lang="ts">
import MyPage from '@/components/MyPage.vue'
import BlogPost from '@/components/BlogPost.vue'
import { ref } from 'vue'

// fake data
const posts = ref([
  {
    id: 1,
    title: 'First Post',
    content: 'Content of the first post'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content of the second post'
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Another blog post'
  }
])
</script>

<template>
  <main>
    <MyPage>
      <template v-slot:pageHeaderContent>
        <span style="font-size: 2rem">Home</span>
      </template>
      <BlogPost
        class="post"
        v-for="post in posts"
        :title="post.title"
        :content="post.content"
        :key="post.id"
      />
    </MyPage>
  </main>
</template>

<style scoped>
.post:not(:last-of-type) {
  margin-bottom: 1rem;
}
</style>