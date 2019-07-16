<template>
    <div class="profile" v-if="isLoading">
        <button @click="backUser" class="backto">Back to Home</button>
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
            <button @click="postLink">Postlar</button>
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
        methods: {
            backUser() {
                this.$router.push({ name: 'home', params: { id: this.$route.params.id } });
            }
            ,
            postLink() {
                this.$router.push({ name: 'post', params: { id: this.$route.params.id } });
            }
        },
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
.backto {
    position: absolute;
    top: 5%;
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