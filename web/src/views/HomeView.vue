<template>
  <div class="box">
    <CreateArticleBar />
    <div class="articles_list" v-for="article in articles" :key="article.id">
      <Article :article="article" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import CreateArticleBar from '../components/CreateArticleBar.vue';
import Article from '../components/Article.vue';
export default {
  components: { CreateArticleBar, Article },
  setup () {
    const store = useStore()
    const articles = computed(() => store.getters.articles)

    onMounted(() => store.dispatch('getArticles'))
    return {articles}
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
