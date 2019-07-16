<template>
    <div>
        <router-link :to="userLink">
            {{user.name}}   #{{user.username}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "User",
        props: {
            user: { type: Object, required: true }
        },
        computed: {
            userLink() {
                return `/user/${this.user.id}`
            }
        }
    }
</script>

<style scoped>

</style>