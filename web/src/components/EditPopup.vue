<template>
    <div class="viniet">
        <div class="popup">
            <div v-if="!commentEditor" class="edit_article">
                <div class="item">
                    <p>Название статьи</p>
                    <input type="text" v-model="title">
                </div>
                <div class="item">
                    <p>Описание статьи</p>
                    <input type="text" v-model="description">
                </div>
                <button @click="editArticle">Изменить</button>
                <button @click="closePopup">Закрыть</button>
            </div>

            <input type="text" placeholder="Комментарий" v-model="text" v-if="commentEditor">
            <div class="buttons" v-if="commentEditor">
                <button @click="editComment">Изменить</button>
                <button @click="closeCommentEdit">Назад</button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
    props: {comment: Object},
    setup (props) {
        const store = useStore()
        const route = useRoute()

        const article = computed(() => store.getters.article)
        const title = ref(store.getters.article.title)
        const description = ref(store.getters.article.description)
        const commentEditor = computed(() => store.state.editComment)
        const text = ref('')

        onMounted(() => {
            store.dispatch('getOneArticle', route.params.id)
            text.value = props.comment.text
        })

        const closePopup = () => {
            store.commit('setPopup')
        }
        const editArticle = () => {
            if(!title.value.trim() || !description.value.trim()){
                alert('Заполните все поля')
            }else{
                store.dispatch('updateArticle', {id: route.params.id, title: title.value, description: description.value})
                store.commit('setPopup')
            }
        }
        const closeCommentEdit = () => {
            store.commit('setPopup')
            store.commit('editComment')
        }
        const editComment = () => {
            if(!text.value.trim()){
                alert('Заполните все поля')
            }else{
                store.dispatch('updateComment', {id: props.comment.id, articleId: route.params.id, text: text.value})
                store.commit('setPopup')
                store.commit('editComment')
            }
        }

        return {article, closePopup, title, description, editArticle, commentEditor, closeCommentEdit, text, editComment}
    }
}
</script>

<style scoped>
.viniet{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.popup{
    display: flex;
    padding: 10px;
    border: 1px solid black;
    background: white;
}
input{
    margin-right: 30px;
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
.edit_article{
    display: flex;

}
</style>