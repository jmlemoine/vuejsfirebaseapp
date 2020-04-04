<template>
    <div>
        <div>Register</div><br>
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
        <div class="email">
            <input type="email" v-model="email" placeholder="Email">
        </div>
        <br>
        <div class="password">
            <input type="password" v-model="password" placeholder="Password">
        </div>
        <br>
        <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
    methods: {
        async pressed(){
            try{
                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                console.log(user)
                this.$router.replace({name: "Secret"});
            }
            catch(err){
                console.log(err)
            }

        }
    },
    data(){
        return {
            email: "",
            password: '',
            error: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>