<template>
  <div id="app">

    <body>
      <header id="header">
        <div @click="retourProjets" class="logoHead" title="Retour à la page projet !"></div>

        <section id="menuHead">
          <ul>
            <li>
              <a :class="{ 'active': !QuiSuisJeVisible, 'notActive': QuiSuisJeVisible }" @click="retourProjets"
                :title="lang === 'fr' ? 'Voir la page projet !' : 'See the project page !'">
                {{ lang === 'fr' ? 'Projets' : 'Projects' }}
              </a>
            </li>
            <li>
              <a :href="lang === 'fr' ? '#QuiSuisJe' : '#WhoAmI'"
                :class="{ 'active': QuiSuisJeVisible, 'notActive': !QuiSuisJeVisible }" @click="toggleQuiSuisJe"
                :title="lang === 'fr' ? 'Voir la page Qui Suis-Je !' : 'Get to know me !'">
                {{ lang === 'fr' ? 'Qui suis-je' : 'Who am I' }}
              </a>
            </li>

            <li class="lang">
              <a class="active" @click="switchLang">{{ lang === 'fr' ? 'En' : 'Fr' }}</a>
            </li>
          </ul>
          <div class="border"></div>
        </section>

        <i id="boutonMobile" @click="openNav" class="fas fa-bars icon"></i>

        <section id="navigationMobile" class="sidenav">
          <i @click="closeNav" class="fas fa-arrow-circle-left"></i>
          <ul>
            <li>
              <a :class="{ 'active': !QuiSuisJeVisible, 'notActive': QuiSuisJeVisible }"
                @click="retourProjets(); closeNav()"
                :title="lang === 'fr' ? 'Voir la page projet !' : 'See the project page !'">
                {{ lang === 'fr' ? 'Projets' : 'Projects' }}
              </a>
            </li>
            <li>
              <a :href="lang === 'fr' ? '#QuiSuisJe' : '#WhoAmI'"
                :class="{ 'active': QuiSuisJeVisible, 'notActive': !QuiSuisJeVisible }"
                @click="toggleQuiSuisJe(); closeNav()"
                :title="lang === 'fr' ? 'Voir la page Qui Suis-Je !' : 'Get to know me !'">
                {{ lang === 'fr' ? 'Qui suis-je' : 'Who am I' }}
              </a>
            </li>

            <li class="lang">
              <a class="active" @click="switchLang">{{ lang === 'fr' ? 'En' : 'Fr' }}</a>
            </li>
          </ul>

          <ul class="linksFooter">
            <li>
              <a href="mailto:matgaudreau13@gmail.com" target="_blank" title="Envoyé moi un courriel !"><i
                  class="fas fa-envelope-square"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mathieu-gaudreau-8243a318a" target="_blank"
                title="Voir mon LinkedIn !"><i class="fab fa-linkedin"></i></a>
            </li>
            <li>
              <a href="https://github.com/MathieuGaudreau" target="_blank" title="Voir mon GitHub !"><i
                  class="fab fa-github-square"></i></a>
            </li>
          </ul>
        </section>
      </header>

      <qui-suis-je :lang="lang" v-if="QuiSuisJeVisible"></qui-suis-je>

      <main v-if="!QuiSuisJeVisible">
        <tri :lang="lang"></tri>
        <section id="listeProjets">
          <projets v-for="projet in projets" :key="projet.id" :id="projet.id" :name="projet.name" :type="projet.type"
            :images1="projet.images1" :images2="projet.images2" :date="projet.date"
            :descriptionProjet="projet.descriptionProjet" :txt2="projet.txt2" :txt3="projet.txt3" :txt4="projet.txt4"
            :LienProjet="projet.LienProjet" :GH="projet.GH" :cover="projet.cover" :roles="projet.roles"
            :technos="projet.technos" :titreYT="projet.titreYT" :LienYT="projet.LienYT" :LienBuild="projet.LienBuild"
            :txtPhotos1="projet.txtPhotos1" :txtPhotos2="projet.txtPhotos2" :titreCanva="projet.titreCanva"
            :canva="projet.canva" :collab="projet.collab" :collabLiens="projet.collabLiens" :lang="lang">
          </projets>
        </section>
      </main>

      <anim-fond></anim-fond>
      <bas-de-page></bas-de-page>
    </body>
  </div>
</template>

<script>
import dbFR from "./assets/dbFR.json";
import dbEN from "./assets/dbEN.json";
import "./style/style.css";
import BasDePage from "./components/BasDePage.vue";
import Tri from "./components/Tri.vue";
import Projets from "./components/Projets.vue";
import AnimFond from "./components/AnimFond.vue";
import QuiSuisJe from "./components/QuiSuisJe.vue";
import { EventBus } from '@/main.js';

window.addEventListener('popstate', function (event) {
  if (event.state != null) {
    EventBus.$emit('callRetourProjets');
  }
});

export default {
  components: { BasDePage, Tri, Projets, AnimFond, QuiSuisJe },
  name: "App",
  mounted() {
    window.addEventListener('popstate', this.handlePopstate);
    EventBus.$on('callRetourProjets', this.retourProjets);
  },
  beforeDestroy() {
    window.removeEventListener('popstate', this.handlePopstate);
    EventBus.$off('callRetourProjets', this.retourProjets);
  },
  data() {
    return {
      lang: "en",
      projets: dbEN,
      projetsFR: dbFR,
      projetsEN: dbEN,
      QuiSuisJeVisible: false,
      imgLogoBlanc: "./assets/logoBlanc.png",
      imgLogoOrange: "./assets/logoOrange.png",
      theme: "",
    };
  },
  methods: {
    switchLang() {
      this.lang = this.lang === 'fr' ? 'en' : 'fr';
      this.projets = this.lang === 'fr' ? this.projetsFR : this.projetsEN;
    },
    toggleQuiSuisJe() {
      this.QuiSuisJeVisible = true;
    },
    retourProjets() {
      if (this.QuiSuisJeVisible) {
        this.QuiSuisJeVisible = false;
      }
      this.$router.push("/");
      EventBus.$emit('closeDetails');
    },
    scrollBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    openNav() {
      document.getElementById("navigationMobile").style.width = "100%";
      document.getElementById("boutonMobile").style.transform = "rotate(-90deg)";
    },
    closeNav() {
      document.getElementById("navigationMobile").style.width = "0";
      document.getElementById("boutonMobile").style.transform = "rotate(0deg)";
    },
    toggleTheme() {
      this.theme = this.theme === "darkMode" ? "" : "darkMode";
      document.documentElement.setAttribute("data-theme", this.theme);
      localStorage.setItem("theme", this.theme);
    },
    handlePopstate(event) {
      if (event.state != null) {
        // Additional logic if needed
      }
    },
  },
};
</script>

<style>@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Righteous&display=swap");</style>
