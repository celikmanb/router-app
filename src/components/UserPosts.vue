<template>
    <div class="posts">
        <div class="post_title">
            <button @click="backUser" class="back_to">Back to User</button>
            <div class="person">
                <img src="../assets/profile_photo.png" >
                <h2>{{username}}</h2>
            </div>
        </div>
        <div class="container">
            <div v-for="(post,key) in posts" class="postList">
                <post_card :post="post"></post_card>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import post_card from './PostCard'

    export default {
        name: "UserPosts",
        data() {
          return {
            posts: {},
            username: '',
          }
        },
        components: {
            post_card
        },
        methods: {
            backUser() {
                 this.$router.push({ name: 'user', params: { id: this.$route.params.id } });
            }
        },
        created() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => { return res })
                .then(data => { this.username = data.data[this.$route.params.id].name; });

            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`)
                .then(res => { return res })
                .then(data => {
                    this.posts = data.data;
                })

        }
    }
</script>

<style scoped>
    img {
        border-radius: 50%;
        width: 45px;
        height: 45px;
    }
    h2 {
        color: #187381;
    }
    .person {
        display: flex;
        align-items: center;
    }
    .container {
        margin-top: 25px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
    }
    .post_title {
        margin-bottom: 40px;
    }
    .postList {
        display: inline-grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 2rem;
        width: 320px;
        text-align: center;
        margin-right: 15px;
        margin-bottom: 15px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    .back_to {
        position: absolute;
        top: 4%;
        right: 3%;
        width: 120px;
        height: 30px;
        border-radius: 40px;
        color: white;
        background-color: #17a2b8;
        border: 1px solid transparent;
        margin-right: 12px;
    }
</style>