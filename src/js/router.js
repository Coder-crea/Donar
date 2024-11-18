import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "./MainPage.vue";
import TarrifsPage from "./TarrifsPage.vue";
import  Teleg from "./Teleg.vue";
import NumbersByTg from "./NumbersByTg.vue";
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path:'/home', component: MainPage, alias: '/'},
        {path: '/tarrifs', component: TarrifsPage},
        {path: '/registration', component: Teleg},
        {path: '/code', component: NumbersByTg},
    ]
});