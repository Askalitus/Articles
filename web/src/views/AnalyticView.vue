<template>
    <div class="box">
        <div class="bar">
            <div class="item">
                <p>От</p>
                <input type="date" v-model="dateFrom">
            </div>
            <div class="item">
                <p>До</p>
                <input type="date" v-model="dateTo">
            </div>
            <button @click="sort">Фильтровать</button>
        </div>
        <div v-for="article in articles" :key="article.id" class="article">
            <div class="title">
                <p>Статья:</p>
                <p>{{ article.title }}</p>
            </div>
            <p class="comment_title">Комментарии:</p>
            <div v-for="comment in comments" :key="comment.id">
                <div v-if="article.id == comment.articleId" class="comment">
                    <p class="comment_text">{{ comment.text }}</p>
                    <p>{{ new Date(comment.createdAt).toLocaleDateString() }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup () {
        const store = useStore()

        const dateFrom = ref(new Date())
        const dateTo = ref(new Date())
        const articles = computed(() => store.getters.articles.filter(el => store.getters.comments.some(com => com.articleId == el.id)))
        const comments = computed(() => store.getters.comments)

        onMounted(() => store.dispatch('getArticles'))

        const sort = () => {
            store.dispatch('getCommentsByDate', {dateFrom: dateFrom.value, dateTo: dateTo.value})
        }

        return {articles, comments, dateFrom, dateTo, sort}
    }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
.bar{
    padding: 10px;
    border: 1px solid black;
    display: flex;
    gap: 30px;
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
.article{
    border: 1px solid black;
    padding: 10px;
    margin-top: 30px;
    width: 500px;
}
.title{
    border-bottom: 1px solid black;
    display: flex;
    font-size: 20px;
    font-weight: 700;
    gap: 10px;
    padding-bottom: 10px;
}
.comment_title{
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
}
.comment{
    border-top: 1px solid black;
    padding-top: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}
</style>