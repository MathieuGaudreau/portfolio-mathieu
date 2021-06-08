import Vue from 'vue';
import App from './App.vue';
import "./style/style.css";
import BasDePage from './components/BasDePage.vue';
import Tri from './components/Tri.vue';
import Projets from './components/Projets.vue';
import AnimFond from './components/AnimFond.vue';
import QuiSuisJe from './components/QuiSuisJe.vue';

Vue.component('quisuisje', QuiSuisJe);
Vue.component('anim', AnimFond);
Vue.component('tri', Tri);
Vue.component('projets', Projets);
Vue.component('basdepage', BasDePage);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
