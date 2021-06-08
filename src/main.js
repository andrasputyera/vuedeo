import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD6-U7VPCj_QSQv4zwbmRtyfRTHZQ9aCSU",
    authDomain: "vue-3-vuedeo.firebaseapp.com",
    projectId: "vue-3-vuedeo",
    storageBucket: "vue-3-vuedeo.appspot.com",
    messagingSenderId: "746970468108",
    appId: "1:746970468108:web:5c6e605a389ee5e5120329"
  };

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
