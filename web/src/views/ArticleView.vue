<template>
  <div class="box">
    <div class="article">
      <p class="title">{{ article.title }}</p>
      <p class="desc">{{ article.description }}</p>
    </div>
    <div class="comments">
      <p class="comments_title">Комментарии:</p>
      <p v-if="!comments.length">Их нет((</p>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        {{ comment.text }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const store = useStore()
    const route = useRoute()

    const article = computed(() => store.getters.article)
    const comments = computed(() => store.getters.comments)

    onMounted(() => store.dispatch('getOneArticle', route.params.id))
    onMounted(() => store.dispatch('getComments', route.params.id))

    return {article, comments}
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
}
.title{
    font-size: 20px;
    font-weight: 700;
}
.desc{
    margin-top: 10px;
}
.comments{
  padding: 10px;
  width: 500px;
  border: 1px solid black;
}
.comment{
  margin-top: 10px;
  border-top: 1px solid black;
  padding-top: 10px;
}
.comments_title{
  font-size: 20px;
  font-weight: 700;
}
</style>
