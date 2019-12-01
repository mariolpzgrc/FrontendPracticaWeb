require("./bootstrap");

window.Vue = require("vue");
import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'
    
Vue.use(VueAxios, axios);

// Vuetify
import Vuetify from 'vuetify' // path to vuetify export

Vue.use(Vuetify);

Vue.use(VueRouter);

import iniciosesion from './components/iniciosesion';
import subirdocumentos from './components/subirarchivos';

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "iniciosesion",
            component: iniciosesion,
        },
        {
            path: "/subir-documentacion",
            name: "",
            component: subirdocumentos,
            link: "subir-documentacion"
        }

    ]
});

new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify()
});
