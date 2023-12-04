<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
    <span class="title">Blog Sample Vue3</span>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
    <PvToast />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
  border-bottom: 1px solid;
  border-color: var(--color-border);
}

.logo {
  display: block;
  margin: 0 2rem 0 0;
}

nav {
  width: 100%;
  text-align: left;
  font-size: 1rem;
  padding: 1rem 0;
  display: flex;
  margin-left: 0.5rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.title {
  display: inline-block;
  white-space: pre;
  font-size: 1.25rem;
}
</style>