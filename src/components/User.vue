<template>
    <div class="user">
        <a @click="userLink" class="userList">
            <strong>{{user.name}}</strong>   #{{user.username}}
        </a>
    </div>
</template>

<script>
    export default {
        name: "User",
        props: {
            user: { type: Object, required: true }
        },
        computed: {
            // userLink() {
            //     return `/user/${this.user.id}`
            // }
        },
        methods: {
            userLink() {
                this.$router.push({ name: 'user', params: { id: this.user.id } });
            }
        }
    }
</script>

<style scoped>
.user {
    text-align: center;
    margin-bottom: 10px;
}
strong {
    font-size: 18px;
    color: #2c3e50;
}
a {
    color: #4845fb;
}
</style>