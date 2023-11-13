import Vue from 'vue';
import App from './App.vue';
import "./style/style.css";
import BasDePage from './components/BasDePage.vue';
import Tri from './components/Tri.vue';
import Projets from './components/Projets.vue';
import AnimFond from './components/AnimFond.vue';
import QuiSuisJe from './components/QuiSuisJe.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import vueReadMore from 'vue-read-more';
import VueRouter from 'vue-router';

Vue.component('quisuisje', QuiSuisJe);
Vue.component('anim', AnimFond);
Vue.component('tri', Tri);
Vue.component('projets', Projets);
Vue.component('basdepage', BasDePage);

Vue.use(vueReadMore);
Vue.use(VueRouter);

const routes = [
  { path: '/projet', component: Projets, name: "Projets" },
];

const router = new VueRouter({
  routes,
});

export const EventBus = new Vue();


new Vue({
  created() {
  },
  router,
  render: h => h(App)
}).$mount('#app')


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () { AOS.init(); }, 500);
});

export function AOSRefresh() {
  setTimeout(function () { AOS.refresh(); }, 500);
}


