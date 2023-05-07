<template>
    <div @click="showArticle" class="article">
        <p class="title">{{ props.article.title }}</p>
        <p class="desc">{{ props.article.description }}</p>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    props: {article: Object},
    setup (props) {
        const router = useRouter()

        const showArticle = () => router.push('/article/' + props.article.id)
        return {props, showArticle}
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
.article:hover{
    background: black;
    color: white;
    cursor: pointer;
}
.title{
    font-size: 20px;
    font-weight: 700;
}
.desc{
    margin-top: 10px;
}
</style>