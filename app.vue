<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' }
})
</script>

<template>
  <main class="app">
    <PasswordGenerator />
  </main>
</template>

<style scoped>
.app {
  display: grid;
  place-items: center;
  min-block-size: 100dvh;
  padding-inline: var(--spacing-200);
}
</style>
