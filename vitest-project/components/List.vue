<script setup lang="ts">
    type Lists =  {
        title: string;
        tags: string[];
        text: string;
    }
    interface Props {
        lists?: Lists[]
    }

    const props = withDefaults(
        defineProps<Props>(), {
            lists: () => [
                {
                    title: 'ダミータイトル',
                    tags: ['ダミータグ'],
                    text: 'ダミーテキスト'
                }
            ]
        }
    );
</script>

<template>
    <div>
        <ul>
            <li v-for="list in props.lists" :key="list.title">
                <div>{{ list.title }}</div>
                <ul v-for="tag in list.tags" :key="tag">
                    <li>{{ tag }}</li>
                </ul>
                <p>
                    {{ list.text }}
                </p>
            </li>
        </ul>
    </div>
</template>
