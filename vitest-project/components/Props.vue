<script setup lang="ts">
    type Props = {
        title: string,
        text?: string,
        num: number,
    }
    const props = withDefaults(defineProps<Props>(),{
        title: 'タイトルです',
        num: 1
    })
</script>

<template>
    <div>{{ props.title }}</div>
    <p v-if="props.text">{{ props.text }}</p>
    <p>{{ props.num }}番目の要素です。</p>
</template>