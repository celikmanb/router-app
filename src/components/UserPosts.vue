<template>
    <h1>Hello</h1>
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
        created() {

            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`)
                .then(res => { return res })
                .then(data => {
                    this.posts = data.data;
                })
        }
    }
</script>

<style scoped>

</style>