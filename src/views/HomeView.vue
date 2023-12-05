<script setup lang="ts">
import MyPage from '@/components/MyPage.vue'
import BlogPost from '@/components/BlogPost.vue'
import { onMounted, ref } from 'vue'
import { type Post, PostService } from '@/views/PostService'

const posts = ref<Post[]>()
const service = new PostService()
onMounted(async () => (posts.value = await service.getPosts()))
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