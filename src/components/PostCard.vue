<template>
    <div class="post_item">
        <p>
            <strong>
                {{post.title}}
            </strong>
        </p>
        <p>{{post.body}}</p>
    </div>
</template>

<script>
    export default {
        name: "PostCard",
        props: {
            post: {
                type: Object,
                required: true
            }

        }
    }
</script>

<style scoped>
    .post_item {
        position: relative;
        flex: 1 0 22rem;
        /*margin: 1rem;*/
        color: #090809;
        cursor: pointer;
        width: 270px;
        height: 200px;
        margin: 10px 25px;
    }
</style>