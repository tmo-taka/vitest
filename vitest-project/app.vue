<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// API コールやログイン状態に応じて選択することができます
const layout = "custom";
</script>
