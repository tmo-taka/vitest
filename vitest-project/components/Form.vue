<script setup lang="ts">
    const value = ref<string>('');
    const errorFlag = ref<boolean>(false);
    const valueUpdate = (event: Event) => {
        if(!(event.target instanceof HTMLInputElement)){
            return
        }
        value.value = event.target.value;

        errorFlag.value = !value.value.includes('@') ? true : false;
    }
</script>

<template>
    <fieldset>
        <legend>テストフォーム</legend>
        <label>
            メールアドレス
            <input type="text" placeholder="めーるあどれす" @blur="valueUpdate" :value="value">
            <div v-if="errorFlag">入力文字に"@"を入れてください。</div>
        </label>
    </fieldset>
</template>
