<template>
    <div>
        <div>Login</div><br>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" placeholder="Login" v-model="email">
            </div>
            <br>
            <div class="password">
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <br>
            <div>
                <button type="submit">Login</button>
            </div>
            <br>
            <div class="error" v-if="error">{{error.message}}</div>
            <span>Need an account? Click here to <router-link to="/register">register</router-link></span>
        </form>
    </div>
</template>

<script>

import * as firebase from "firebase/app";
import "firebase/auth";
export default {
    methods: {
        async pressed() {
            try {
                const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                console.log(val)
                this.$router.replace({name: "Secret"})
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

    /*input{
        width: 400px;
        padding: 30px;
        margin: 20px;
        font-size: 21px;
    }
    button {
        width: 400px;
        height: 75px;
        font-size: 100%;
    }
    .error {
        color: red;
    }*/


</style>