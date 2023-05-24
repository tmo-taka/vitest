<script setup lang="ts">
    const counter = ref(0);
    const increment = () => counter.value++;
</script>

<template>
    <div>
        <p>{{ counter }}</p>
        <p><button @click="increment">カウントアップ</button></p>
    </div>
</template>
