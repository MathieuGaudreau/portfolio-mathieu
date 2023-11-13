<template>
  <article class="projets" :class="type">
    <a target="_self" :href="'#' + id" @click="scrollTop(); toggleDetails();">
      <article class="projetThumb" :style="{ backgroundImage: 'url(' + cover + ')' }"></article>
    </a>

    <section :id="id" v-if="detailsAreVisible" class="detailsProjets">
      <section class="headProjets" :style="{ backgroundImage: 'url(' + cover + ')' }">
        <h3 v-if="lang === 'fr'" class="retour" @click="closeDetails">
          <i class="fas fa-arrow-circle-left"></i>
          Retour à la liste des projets
        </h3>

        <h3 v-if="lang === 'en'" class="retour" @click="closeDetails">
          <i class="fas fa-arrow-circle-left"></i>
          Back to project list
        </h3>
      </section>

      <section class="nomProjet" data-aos="fade-right">
        <h1>{{ name }}</h1>
        <h4>{{ date }}</h4>
      </section>

      <section class="description">
        <div class="descHalf">
          <div class="rolesLogi" data-aos="fade-right">
            <h4 v-if="lang === 'fr'">Rôles :</h4>
            <h4 v-if="lang === 'en'">Roles :</h4>
            <ul>
              <li v-for="(role, index) in roles" :key="index">
                {{ roles[index] }}
              </li>
            </ul>
          </div>
          <div class="rolesLogi" data-aos="fade-right">
            <h4 v-if="lang === 'fr'">Fait avec :</h4>
            <h4 v-if="lang === 'en'">Made with :</h4>
            <ul>
              <li v-for="(techno, index) in technos" :key="index">
                {{ technos[index] }}
              </li>
            </ul>
          </div>
          <div v-if="LienProjet" class="rolesLogi liensProjets" data-aos="fade-right">

            <h4 v-if="lang === 'fr'">Le jeu :</h4>
            <h4 v-if="lang === 'en'">Game link :</h4>
            <ul>
              <li>
                <a :href="LienProjet" target="_blank" v-if="lang === 'fr'"><i
                    class="fas fa-external-link-square-alt"></i></a>

                <a :href="LienProjet" target="_blank" v-if="lang === 'en'"><i
                    class="fas fa-external-link-square-alt"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="txtDescription" data-aos="fade-left">
          <h4 v-if="lang === 'fr'">Le projet</h4>
          <h4 v-if="lang === 'en'">The project</h4>

          <p v-html="descriptionProjet"></p>
        </div>
      </section>

      <div v-if="LienBuild" class="divider"></div>

      <section v-if="LienBuild" class="build" data-aos="fade-up">

        <section class="nomCat" data-aos="fade-right">
          <h1 v-if="lang === 'fr'">Jouer au jeu !</h1>
          <h1 v-if="lang === 'en'">Try the game !</h1>
        </section>

        <iframe id="player" type="text/html" :src="LienBuild" frameborder="0" showinfo="0"
          allowfullscreen="allowfullscreen"></iframe>
      </section>

      <div v-if="LienYT" class="divider"></div>

      <section v-if="LienYT" class="youtube" data-aos="fade-up">

        <section class="nomCat" data-aos="fade-right">
          <h1>{{ titreYT }}</h1>
        </section>

        <iframe id="player" type="text/html" :src="LienYT" frameborder="0" showinfo="0"
          allowfullscreen="allowfullscreen"></iframe>

      </section>

      <div class="divider"></div>

      <section class="largeTxt" data-aos="fade-up">

        <section class="nomCat" data-aos="fade-right">
          <h1>{{ txt2[0] }}</h1>
        </section>

        <p v-html="txt2[2]"></p>

        <read-more v-if="lang === 'fr'" more-str="En savoir plus ?" :text="txt2[1]" link="#" less-str="En savoir moins ?"
          :max-chars="150"></read-more>
        <read-more v-if="lang === 'en'" more-str="Read more ?" :text="txt2[1]" link="#" less-str="Read less ?"
          :max-chars="150"></read-more>

      </section>

      <div v-if="images1" class="divider"></div>

      <section v-if="images1" class="sliders" data-aos="fade-right">
        <hooper class="hooper1Container">
          <slide :class="{ onlyOneSlider: !images2 }" v-for="(image, index) in images1" :key="index">
            <img :src="images1[index]" v-if="lang === 'fr'" title="Cliquez pour agrandir l'image" alt=""
              @click="() => showImg(index)" />
            <img :src="images1[index]" v-if="lang === 'en'" title="Click to enlarge image" alt=""
              @click="() => showImg(index)" />
            <div class="detailImg">
              <h3 v-if="lang === 'fr'">Dans cette image :</h3>
              <h3 v-if="lang === 'en'">In this image :</h3>
              <p v-html="txtPhotos1[index]"></p>
            </div>
          </slide>

          <hooper-pagination :class="{ oneSlider: !images2 }" slot="hooper-addons"></hooper-pagination>
        </hooper>

        <vue-easy-lightbox class="lightBox" rotatedisabled=true :visible="visible" :imgs="images1" :index="index"
          @hide="handleHide"></vue-easy-lightbox>

      </section>

      <div v-if="txt3" class="divider"></div>

      <section v-if="txt3" class="largeTxt" data-aos="fade-up">

        <section class="nomCat" data-aos="fade-right">
          <h1>{{ txt3[0] }}</h1>
        </section>

        <p v-html="txt3[2]"></p>

        <read-more v-if="lang === 'fr'" more-str="En savoir plus ?" :text="txt3[1]" link="#" less-str="En savoir moins ?"
          :max-chars="150"></read-more>
        <read-more v-if="lang === 'en'" more-str="Read more ?" :text="txt3[1]" link="#" less-str="Read less ?"
          :max-chars="150"></read-more>

      </section>

      <div v-if="images2" class="divider"></div>

      <section v-if="images2" class="sliders" data-aos="fade-left">

        <hooper class="hooper1Container" v-if="images2">
          <slide v-for="(image, index) in images2" :key="index">
            <img :src="images2[index]" v-if="lang === 'fr'" title="Cliquez pour agrandir l'image" alt=""
              @click="() => showImg2(index)" />
            <img :src="images2[index]" v-if="lang === 'en'" title="Click to enlarge image" alt=""
              @click="() => showImg2(index)" />
            <div class="detailImg">
              <h3 v-if="lang === 'fr'">Dans cette image :</h3>
              <h3 v-if="lang === 'en'">In this image :</h3>
              <p v-html="txtPhotos2[index]"></p>
            </div>
          </slide>

          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>

        <vue-easy-lightbox :visible="visible2" :imgs="images2" :index="index2" @hide="handleHide2"></vue-easy-lightbox>

      </section>

      <div v-if="txt4" class="divider"></div>

      <section v-if="txt4" class="largeTxt" data-aos="fade-up">

        <section class="nomCat" data-aos="fade-right">
          <h1>{{ txt4[0] }}</h1>
        </section>

        <p v-html="txt2[3]"></p>

        <read-more v-if="lang === 'fr'" more-str="En savoir plus ?" :text="txt4[1]" link="#" less-str="En savoir moins ?"
          :max-chars="150"></read-more>
        <read-more v-if="lang === 'en'" more-str="Read more ?" :text="txt4[1]" link="#" less-str="Read less ?"
          :max-chars="150"></read-more>

      </section>

      <div v-if="canva" class="divider"></div>

      <section class="canvas" v-if="canva">

        <section class="nomCat" data-aos="fade-right">
          <h1 v-html="titreCanva"></h1>
        </section>

        <div v-for="(canvas, index) in canva" :key="index" data-aos="fade-up">

          <iframe loading="lazy" :src="canva[index]" allow="autoplay" allowfullscreen="true">
          </iframe>
        </div>

      </section>

      <div v-if="collab" class="divider"></div>

      <section class="collab" v-if="collab">

        <section class="nomCat" data-aos="fade-right">
          <h1 v-if="lang === 'fr'">En collaboration avec :</h1>
          <h1 v-if="lang === 'en'">In collaboration with :</h1>

          <ul>
            <li v-for="(collabs, index) in collab" :key="index">
              <a :href="collabLiens[index]" target="_blank">
                {{ collab[index] }}
                <i class="fas fa-external-link-square-alt"></i>
              </a>
            </li>
          </ul>
        </section>

      </section>



      <section class="retourProjets" @click="closeDetails">
        <h1 v-if="lang === 'fr'">
          <i class="fas fa-arrow-circle-left"></i>Retour à la liste des projets
        </h1>

        <h1 v-if="lang === 'en'">
          <i class="fas fa-arrow-circle-left"></i>Back to project list
        </h1>
      </section>
    </section>
  </article>
</template>


<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
import VueEasyLightbox from "vue-easy-lightbox";
import { AOSRefresh } from "@/main";
import { EventBus } from '@/main.js';

// import pdf from 'vue-pdf';
export default {
  created() {
    EventBus.$on('closeDetails', this.closeDetails);
  },
  components: { Hooper, Slide, HooperPagination, VueEasyLightbox },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    images1: {
      type: Array,
      required: false,
    },
    images2: {
      type: Array,
      required: false,
    },
    txtPhotos1: {
      type: Array,
      required: false,
    },
    txtPhotos2: {
      type: Array,
      required: false,
    },
    cover: {
      type: String,
      required: true,
    },
    descriptionProjet: {
      type: String,
      required: true,
    },
    txt2: {
      type: Array,
      required: true,
    },
    txt3: {
      type: Array,
      required: false,
    },
    txt4: {
      type: Array,
      required: false,
    },
    roles: {
      type: Array,
      required: true,
    },
    technos: {
      type: Array,
      required: true,
    },
    LienProjet: {
      type: String,
      required: false,
    },
    titreYT: {
      type: String,
      required: false,
    },
    LienYT: {
      type: String,
      required: false,
    },
    LienBuild: {
      type: String,
      required: false,
    },
    titreCanva: {
      type: String,
      required: false,
    },
    canva: {
      type: Array,
      required: false,
    },
    GH: {
      type: String,
      required: false,
    },

    collab: {
      type: Array,
      required: false,
    },

    collabLiens: {
      type: Array,
      required: false,
    },

    lang: {},
  },
  data() {
    return {
      detailsAreVisible: false,
      index: 0,
      index2: 0,
      visible: false,
      visible2: false,
    };
  },
  methods: {
    toggleDetails() {
      AOSRefresh();
      this.detailsAreVisible = !this.detailsAreVisible;

      const projets = document.querySelectorAll(".projetThumb");

      for (let i = 0; i < projets.length; i++) {
        projets[i].style.display = "none";
      }

      const ListProjets = document.querySelectorAll(".projets");

      for (let i = 0; i < ListProjets.length; i++) {
        ListProjets[i].style.width = "100%";
      }

      document.getElementById("tri").style.display = "none";
    },
    closeDetails() {

      this.$router.push("/");

      document.documentElement.scrollTop = 0;

      this.detailsAreVisible = false;

      const projets = document.querySelectorAll(".projetThumb");

      for (let i = 0; i < projets.length; i++) {
        projets[i].style.display = "flex";
      }

      const ListProjets = document.querySelectorAll(".projets");

      for (let i = 0; i < ListProjets.length; i++) {
        if (window.screen.width < 1024) {
          ListProjets[i].style.width = "100%";
        } else {
          ListProjets[i].style.width = "40%";
        }
      }

      document.getElementById("tri").style.display = "flex";

      const triCreation = document.getElementById("creation");
      triCreation.classList.remove("active");

      const triJeux = document.getElementById("jeux");
      triJeux.classList.remove("active");

      const triWeb = document.getElementById("web");
      triWeb.classList.remove("active");

      const triTous = document.getElementById("tous");
      triTous.classList.add("active");
    },
    scrollTop() {
      document.documentElement.scrollTop = 0;
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    showImg2(index2) {
      this.index2 = index2;
      this.visible2 = true;
    },
    handleHide2() {
      this.visible2 = false;
    },
  },

};
</script>