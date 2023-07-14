<script setup>
    console.log(useNuxtApp())
    const { $openChrome } = useNuxtApp();
    // console.log(openChrome());
</script>
<template>
    <NuxtLayout>
        <div>
            <!-- <template #header>ヘッダー</template> -->
            <Top />
            <a @click="$openChrome()">Chromeを開く</a>
            <!-- <div>
                {{ $openChrome() }}
            </div> -->
            <Props :text="'takahara'"/>
        </div>
    </NuxtLayout>
</template>