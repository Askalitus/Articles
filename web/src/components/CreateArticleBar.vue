<template>
    <div class="create_box">
        <div class="item">
            <p>Название статьи</p>
            <input type="text" placeholder="Название" v-model="title">
        </div>
        <div class="item">
            <p>Описание статьи</p>
            <input type="text" placeholder="Описание" v-model="description">
        </div>
        <button @click="createArticle">Создать статью</button>
    </div>
</template>

<script>
import { ref } from 'vue'
import {useStore} from 'vuex'
export default {
    setup () {
        const store = useStore()
        let title = ref('')
        let description = ref('')

        const createArticle = () => {
            if(!title.value.trim() || !description.value.trim()){
                alert('Заполните все поля')
            }else{
                store.dispatch('addArticle', {title: title.value, description: description.value})
                title.value = ''
                description.value = ''
            }
        }

        return {title, description, createArticle}
    }
}
</script>

<style scoped>
.create_box{
    padding: 10px;
    display: flex;
    gap: 30px;
    border: 1px solid black;
    margin-top: 30px;
}
button{
    background: none;
    border: 1px solid black;
    padding: 10px;
}
button:hover{
    background: black;
    color: white;
    cursor: pointer;
}
</style>