<script setup lang="ts">
    const userInformation = reactive({
        tel: '',
        mail: ''
    });

    const errorFlag = reactive({
        tel: false,
        mail: false
    })

    const submitFlag = ref<boolean>(false);

    type UserInformationKey = keyof (typeof userInformation)
    const valueUpdate = (event: Event, id: UserInformationKey) => {
        if(!(event.target instanceof HTMLInputElement)){ return }
        userInformation[id] = event.target.value;

        switch(id){
            case 'mail':
                errorFlag[id] = !userInformation[id].includes('@') ? true : false;
                break;
            case 'tel':
                errorFlag[id] = isNaN(Number(userInformation[id])) ? true : false;
        }
    }

    const judgeSubmit = ():boolean => {
        const userInformationArr:string[] = Object.values(userInformation);
        const errorFlagArr:boolean[] = Object.values(errorFlag);
        const judgeData = userInformationArr.every(data => data);
        const judgeError = errorFlagArr.every(error => !error);

        return judgeData && judgeError ? true : false
    }

    const submitData = ():void => {submitFlag.value = true}
</script>

<template>
    <form action="" method="get" class="form-example">
        <fieldset>
            <legend>個人情報</legend>
            <!-- TODO: v-forにする -->
            <div>
                <label>
                    メールアドレス
                    <input type="text" placeholder="めーるあどれす" @blur="valueUpdate($event,'mail')" :value="userInformation.mail">
                    <div v-if="errorFlag.mail" role="">入力文字に"@"を入れてください。</div>
                </label>
            </div>
            <div>
                <label>
                    電話番号
                    <input type="tel" placeholder="電話番号" @blur="valueUpdate($event,'tel')" :value="userInformation.tel">
                    <div v-if="errorFlag.tel">数値で入力してください。</div>
                </label>
            </div>
        </fieldset>
        <button type="button" :disabled="!judgeSubmit()" @click="submitData()">送信</button>
        <div v-if="submitFlag">送信が完了しました！</div>
    </form>
</template>
