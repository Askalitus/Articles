<template>
  <div class="box">
    <div class="article">
      <div class="left">
        <p class="title">{{ article.title }}</p>
        <p class="desc">{{ article.description }}</p>
      </div>
      <div class="right">
        <button @click="deleteArticle">Удалить</button>
      </div>
    </div>
    <div class="comments">
      <p class="comments_title">Комментарии:</p>
      <p v-if="!comments.length">Их нет((</p>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <p class="comment_text">{{ comment.text }}</p>
        <button @click="deleteComment(comment)">Удалить</button>
      </div>
    </div>
    <CreateCommentVue />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import CreateCommentVue from '../components/CreateComment.vue'
export default {
  components: { CreateCommentVue },
  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const article = computed(() => store.getters.article)
    const comments = computed(() => store.getters.comments)

    onMounted(() => store.dispatch('getOneArticle', route.params.id))
    onMounted(() => store.dispatch('getComments', route.params.id))

    const deleteArticle = () => {
      store.dispatch('deleteArticle', route.params.id)
      router.push('/')
    }
    const deleteComment = (comment) => {
      store.dispatch('deleteComment', {id: comment.id, articleId: route.params.id})
    }

    return {article, comments, deleteArticle, deleteComment}
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
.article{
  padding: 10px;
  width: 500px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title{
    font-size: 20px;
    font-weight: 700;
}
.desc{
    margin-top: 10px;
    word-wrap: break-word;
}
.comments{
  padding: 10px;
  width: 500px;
  border: 1px solid black;
}
.comment{
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 10px;
  border-top: 1px solid black;
  padding-top: 10px;
}
.comment_text{
  word-wrap: break-word;
  width: 400px;
}
.comments_title{
  font-size: 20px;
  font-weight: 700;
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
