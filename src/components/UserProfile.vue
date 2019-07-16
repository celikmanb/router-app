<template>
    <div class="profile" v-if="isLoading">
        <div class="personal">
            <img src="../assets/profile_photo.png" alt="">
            <div class="title">
                <h1>{{users[id].name}}</h1>
                <label>#{{users[id].username}}</label>
            </div>
            <br>
        </div>
        <hr>
        <div class="posts">
            <h2>Postlar</h2>
            <router-link :to="postLink">Postlar</router-link>
            <hr>
        </div>

        <div class="user_contact">
            <h2>İletişim Bilgileri</h2>
            <br>
            <p><strong>Telefon numarası:</strong> {{users[id].phone}}</p>
            <p><strong>Email Adresi:</strong> {{users[id].email}}</p>
            <p><strong>Adresi:</strong> {{users[id].address.street}}, {{users[id].address.suite}}, {{users[id].address.city}},
                {{users[id].address.street}}, {{users[id].address.zipcode}}
            </p>
        </div>
        <hr>
        <div class="project">
            <h2>Projeler</h2>
            <br>
            <p>
                <strong>Proje Linki: </strong>
                <a :href="'{{users[id].website}}'">{{users[id].website}}</a>
            </p>

        </div>
        <hr>
        <div class="company">
            <h2>Şirket Bilgileri</h2>
            <br>
            <p><strong>Bs:</strong> {{users[id].company.bs}}</p>
            <p><strong>Anahtar Kelimeler:</strong> {{users[id].company.catchPhrase}}</p>
            <p><strong>Şirket İsmi:</strong> {{users[id].company.name}}</p>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: "UserProfile",
        data() {
            return {
                users: [],
                id: 0,
                isLoading: false
            }
        },
        created() {
            const url = 'https://jsonplaceholder.typicode.com/users';

            axios.get(url, {
                params: {
                    id: this.$route.params.id
                }
            })
                .then(res => { return res })
                .then(data => {
                    this.users = data.data;
                    this.isLoading = true;
                })
        },
        computed: {
            postLink() {
                return `/users/${this.$route.params.id}/posts`;
            }
        }
    }
</script>

<style scoped>
img {
    width: 200px;
    height: 200px;
}
.personal {
    display: flex;
}
.title {
    padding-left: 100px;
}
</style>