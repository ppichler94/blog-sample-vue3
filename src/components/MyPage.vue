<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="header">
      <slot name="pageHeaderContent" />
    </div>
    <div class="pageContent">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.pageContent {
  margin-top: 1rem;
}
</style>
