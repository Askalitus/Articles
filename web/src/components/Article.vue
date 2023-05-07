<template>
    <div class="article">
        <p class="title">{{ props.article.title }}</p>
        <p class="desc">{{ props.article.description }}</p>
        <p class="comment">Комментарии:</p>
        <div v-for="comment in comments" :key="comment.id">
            {{ comment.text }}
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
export default {
    props: {article: Object},
    setup (props) {
        const store = useStore()

        onMounted(() => store.dispatch('getComments', props.article.id))

        const comments = store.state.comments
        return {props, comments}
    }
}
</script>

<style scoped>
.article{
    padding: 10px;
    border: 1px solid black;
    width: 500px;
    margin-top: 30px;
}
.title{
    font-size: 20px;
    font-weight: 700;
}
.desc{
    margin-top: 10px;
}
</style>