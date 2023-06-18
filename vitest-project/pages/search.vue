<script setup lang="ts">
    const route = useRoute();
    const { name } = route?.query || {};
    const displayName = name ?? '名無し';
</script>

<template>
    <NuxtLayout>
        <h1 v-cloak>こんにちは{{displayName}}さん</h1>
        <div>
            <!-- <template #header>ヘッダー</template> -->
            <Form />
        </div>
    </NuxtLayout>
</template>