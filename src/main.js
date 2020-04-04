import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCL3vZ53UygulDauMdAyERbetGVajSYEMw",
  authDomain: "vuejstutoriallog.firebaseapp.com",
  databaseURL: "https://vuejstutoriallog.firebaseio.com",
  projectId: "vuejstutoriallog",
  storageBucket: "vuejstutoriallog.appspot.com",
  messagingSenderId: "215381720785",
  appId: "1:215381720785:web:f09ee78e9b63caff804ff0",
  measurementId: "G-0M7TWKEGZ5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


/*new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
*/