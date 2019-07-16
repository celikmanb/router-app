<template>
    <div>
        <template v-for="user in users">
            <User :user="user"></User>
        </template>
    </div>
</template>

<script>
    import axios from 'axios';
    import User from './User'

    export default {
        name: "Home",
        components: {
            User
        },
        data() {
          return {
              users: []
          }
        },
        created() {
            const url = 'https://jsonplaceholder.typicode.com/users';
            axios.get(url)
                .then(res => { return res })
                .then(data => { this.users = data.data; })
        }
    }
</script>

<style scoped>

</style>