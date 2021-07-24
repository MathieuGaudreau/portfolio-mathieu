<template>
  <div id="app">
    <body>
      <header id="header">
        <div
          @click="retourProjets"
          class="logoHead"
          title="Retour à la page projet !"
        ></div>

        <section id="menuHead">
          <ul>
            <li>
              <a
                :class="!QuiSuisJeVisible ? 'active' : 'notActive'"
                @click="retourProjets"
                title="Voir la page projet !"
                >Projets</a
              >
            </li>
            <li>
              <a
                :class="QuiSuisJeVisible ? 'active' : 'notActive'"
                @click="toggleQuiSuisJe"
                title="Voir la page Qui Suis-Je !"
                >Qui suis-je</a
              >
            </li>
            <li>
              <a @click="scrollBottom" title="Voir la section contact !"
                >Contact</a
              >
            </li>

            <!-- Bouton Lang Switch -->
            <!-- <li>
              <button @click="switchLang"></button>
            </li> -->

            <!-- Bouton Dark Theme -->
            <!-- <li>
              <h1 @click="toggleTheme" aria-label="Toggle themes">
                <span v-if="this.theme == 'darkMode'"
                  ><i class="far fa-sun"></i
                ></span>
                <span v-else><i class="far fa-moon"></i></span>
              </h1>
            </li> -->


          </ul>
          <div class="border"></div>
        </section>

        <i id="boutonMobile" @click="openNav" class="fas fa-bars icon"></i>

        <section id="navigationMobile" class="sidenav">
          <i @click="closeNav" class="fas fa-arrow-circle-left"></i>
          <ul>
            <li>
              <a
                :class="!QuiSuisJeVisible ? 'active' : 'notActive'"
                @click="
                  retourProjets();
                  closeNav();
                "
                title="Voir la page projet !"
                >  Projets</a
              >
            </li>
            <li>
              <a
                :class="QuiSuisJeVisible ? 'active' : 'notActive'"
                @click="
                  toggleQuiSuisJe();
                  closeNav();
                "
                title="Voir la page Qui Suis-Je !"
                >Qui suis-je</a
              >
            </li>
          </ul>

          <ul class="linksFooter">
            <li>
              <a
                href="mailto:matgaudreau13@gmail.com"
                target="_blank"
                title="Envoyé moi un courriel !"
                ><i class="fas fa-envelope-square"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mathieu-gaudreau-8243a318a"
                target="_blank"
                title="Voir mon LinkedIn !"
                ><i class="fab fa-linkedin"></i
              ></a>
            </li>
            <li>
              <a
                href="https://github.com/MathieuGaudreau"
                target="_blank"
                title="Voir mon GitHub !"
                ><i class="fab fa-github-square"></i
              ></a>
            </li>
          </ul>
        </section>
      </header>

      <qui-suis-je v-if="QuiSuisJeVisible"></qui-suis-je>

      <main v-if="!QuiSuisJeVisible">
        <tri></tri>
        <section id="listeProjets">
          <projets
            v-for="projet in projets"
            :key="projet.id"
            :id="projet.id"
            :name="projet.name"
            :type="projet.type"
            :images1="projet.images1"
            :images2="projet.images2"
            :date="projet.date"
            :txt="projet.txt"
            :LienProjet="projet.LienProjet"
            :GH="projet.GH"
            :cover="projet.cover"
            :roles="projet.roles"
            :technos="projet.technos"
            :LienYT="projet.LienYT"
            :txtPhotos1="projet.txtPhotos1"
            :txtPhotos2="projet.txtPhotos2"
            :canva="projet.canva"
            :mots="projet.mots"
          ></projets>
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

export default {
  components: { BasDePage, Tri, Projets, AnimFond, QuiSuisJe },
  name: "App",
  data() {
    return {
      projets: dbFR,
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
      if (this.$lang == "fr") {
        this.$lang = "en";
        this.projets = this.projetsEN;
      } else {
        this.$lang = "fr";
        this.projets = this.projetsFR;
      }

      console.log(this.$lang);


    },
    toggleQuiSuisJe() {
      this.QuiSuisJeVisible = true;
    },
    retourProjets() {
      if (this.QuiSuisJeVisible) {
        this.QuiSuisJeVisible = false;
      }
    },
    scrollBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
    openNav() {
      document.getElementById("navigationMobile").style.width = "100%";
      document.getElementById("boutonMobile").style.transform =
        "rotate(-90deg)";
    },

    /* Close/hide the sidenav */
    closeNav() {
      document.getElementById("navigationMobile").style.width = "0";
      document.getElementById("boutonMobile").style.transform = "rotate(0deg)";
    },
    toggleTheme() {
      this.theme = this.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.theme); // stores theme value on local storage
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Righteous&display=swap");
</style>

