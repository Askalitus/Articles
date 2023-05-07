<template>
    <div class="box_create">
        <input type="text" placeholder="Комментарий" v-model="comment">
        <button @click="createComment">Прокомментировать</button>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup () {
        let comment = ref('')
        const store = useStore()
        const route = useRoute()

        const createComment = () => {
            store.dispatch('addComment', {articleId: route.params.id, text: comment.value})
            comment.value = ''
        }

        return {comment, createComment}
    }
}
</script>

<style scoped>
.box_create{
    width: 500px;
    padding: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
}
input{
    width: 300px;
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