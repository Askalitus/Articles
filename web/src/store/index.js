import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        articles: [],
        article: {},
        comments: [],
        comment: {}
    },
    mutations: {
        // мутации для статей
        setArticles(state, articles){
            state.articles = articles
        },
        setArticle(state, article){
            state.article = article
        },

        // мутации для комментариев
        setComments(state, comments){
            state.comments = comments
        },
        setComment(state, comment){
            state.comment = comment
        }
    },
    actions: {
        // действия для статей
        getArticles({commit}){
            axios
                .get('http://localhost:8080/articles')
                .then(res => commit('setArticles', res.data))
        },
        getOneArticle({commit}, id){
            axios
                .get('http://localhost:8080/article/' + id)
                .then(res => commit('setArticle', res.data))
        },
        addArticle({}, {title, description}){
            axios
                .post('http://localhost:8080/article', {
                    title: title,
                    description: description
                })
                .then(res => this.dispatch('getArticles'))
        },
        updateArticle({}, {id, title, description}){
            axios
                .patch('http://localhost:8080/article/' + id, {
                    title: title,
                    description: description
                })
                .then(res => this.dispatch('getArticles'))
        },
        deleteArticle({}, {id}){
            axios
                .delete('http://localhost:8080/article/' + id)
                .then(res => this.dispatch('getArticles'))
        },

        // действия для комментариев
        getComments({commit}, articleId){
            axios
                .get('http://localhost:8080/article/' + articleId + '/comments')
                .then(res => commit('setComments', res.data))
        },
        getOneComment({commit}, {articleId, id}){
            axios
                .get('http://localhost:8080/article/' + articleId + '/comment/' + id)
                .then(res => commit('setComment', res.data))
        },
        getCommentsByDate({commit}, {dateFrom, dateTo}){
            axios
                .get('http://localhost:8080/analytic/comments?dateFrom="' + dateFrom + '"&dateTo="' + dateTo + '"')
                .then(res => commit('setComments', res.data))
        },
        addComment({}, {articleId, text}){
            axios
                .post('http://localhost:8080/article/' + articleId + '/comment', {
                    text: text
                })
                .then(res => this.dispatch('getComments'))
        },
        updateComment({}, {id, articleId, text}){
            axios
                .patch('http://localhost:8080/article/' + articleId + '/comment/' + id, {
                    text: text
                })
                .then(res => this.dispatch('getComments'))
        },
        deleteComment({}, {id, articleId}){
            axios
                .delete('http://localhost:8080/article/' + articleId + '/comment/' + id)
                .then(res => this.dispatch('getComments'))
        }
    },
    getters: {
        // геттеры для статей
        articles(state){
            return state.articles
        },
        article(state){
            return state.article
        },

        // геттеры для комментариев
        comments(state){
            return state.comments
        },
        comment(state){
            return state.comment
        }
    }
})