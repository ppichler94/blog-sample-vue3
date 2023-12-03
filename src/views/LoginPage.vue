<script setup lang="ts">
import MyPage from '@/components/MyPage.vue'
</script>

<template>
  <MyPage>
    <form action="/login">
      <div class="input">
        <label for="username">Username</label><br />
        <input type="text" id="username" name="username" />
      </div>
      <br />

      <div class="input">
        <label for="password">Password</label><br />
        <input type="password" id="password" name="password" />
      </div>
      <br />
      <div class="input">
        <input class="button" type="submit" value="Submit" />
      </div>
    </form>
  </MyPage>
</template>

<style scoped>
.input {
  //background-color: var(--color-background-soft);
  //border-color: var(--color-border);
  border-radius: 5px;
  display: inline-block;
}

.input:not(:last-of-type) {
  margin-bottom: 0.5rem;
}

.input input {
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}

.button {
  appearance: none;

  padding: 0.5rem;
  border: none;
  background-color: var(--color-primary);
  color: var(--color-text);
  font-size: 1.25rem;
}
</style>