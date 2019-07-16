<template>
    <div class="posts">
        <button @click="backUser">Back to User</button>
        <template v-for="(post,key) in posts">
            <p>
                <strong>
                    {{key}}.
                    {{post.title}}
                </strong>
            </p>
            <p>{{post.title}}</p>
            <hr>
        </template>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "UserPosts",
        data() {
          return {
            posts: {}
          }
        },
        methods: {
            backUser() {
                 this.$router.push({ name: 'user', params: { id: this.$route.params.id } });
            }
        },
        created() {
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`)
                .then(res => { return res })
                .then(data => {
                    this.posts = data.data;
                })
        }
    }
</script>

<style scoped>

</style>