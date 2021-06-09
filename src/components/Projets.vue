<template>
  <article class="projets" :class="type">
    <article
      class="projetThumb"
      @click="
        scrollTop();
        toggleDetails();
      "
      :style="{ backgroundImage: 'url(' + cover + ')' }"
    ></article>

    <section id="details" v-if="detailsAreVisible" class="detailsProjets">
      <section
        class="headProjets"
        :style="{ backgroundImage: 'url(' + cover + ')' }"
      >
        <h3 class="retour" @click="closeDetails">
          <i class="fas fa-arrow-circle-left"></i>Retour à la liste des projets
        </h3>
      </section>

      <section class="nomProjet" data-aos="fade-right">
        <h1>{{ name }}</h1>
        <h4>{{ date }}</h4>
      </section>

      <section class="description">
        <div class="descHalf">
          <div class="rolesLogi" data-aos="fade-right">
            <h4>Rôles :</h4>
            <ul>
              <li v-for="(role, index) in roles" :key="index">
                {{ roles[index] }}
              </li>
            </ul>
          </div>
          <div class="rolesLogi" data-aos="fade-right">
            <h4>Fait avec :</h4>
            <ul>
              <li v-for="(techno, index) in technos" :key="index">
                {{ technos[index] }}
              </li>
            </ul>
          </div>
        </div>
        <div class="txtDescription" data-aos="fade-left">
          <h4>Le projet</h4>

          <p v-for="(text, index) in txt" :key="index">{{ txt[index] }}</p>
        </div>
      </section>

      <div class="divider"></div>

      <section v-if="LienProjet" class="liensProjets">
        <h2>
          <a :href="LienProjet" target="_blank"
            >Voir le projet<i class="fas fa-external-link-square-alt"></i
          ></a>
        </h2>

        <h2 v-if="GH">
          <a :href="GH" target="_blank"
            >Voir le GitHub<i class="fab fa-github-square"></i
          ></a>
        </h2>
      </section>

      <div v-if="LienProjet" class="divider"></div>

      <section v-if="LienYT" class="youtube" data-aos="fade-up">
        <iframe
          id="player"
          type="text/html"
          :src="LienYT"
          frameborder="0"
          showinfo="0"
        ></iframe>

        <div class="divider" v-if="canva || images1"></div>
      </section>

      <section class="canvas" v-if="canva" >
        <div v-for="(canvas, index) in canva" :key="index" data-aos="fade-up">
          <iframe
            loading="lazy"
            :src="canva[index]"
          >
          </iframe>
        </div>
      </section>

      <div v-if="canva" class="divider"></div>

      <section v-if="images1" class="sliders">
        <hooper class="hooper1Container" data-aos="fade-right">
          <slide :class="{onlyOneSlider: !images2}" v-for="(image, index) in images1" :key="index">
            <img :src="images1[index]" alt="" @click="() => showImg(index)" />
            <div class="detailImg">
              <h3>Dans cette image :</h3>
              <p>{{ txtPhotos1[index] }}</p>
            </div>
          </slide>

          <hooper-pagination :class="{oneSlider: !images2}" slot="hooper-addons"></hooper-pagination>
        </hooper>

        <hooper class="hooper2Container" v-if="images2" data-aos="fade-left">
          <slide class="hooper2" v-for="(image, index) in images2" :key="index">
            <img :src="images2[index]" alt="" @click="() => showImg2(index)" />
            <div class="detailImg">
              <h3>Dans cette image :</h3>
              <p>{{ txtPhotos2[index] }}</p>
            </div>
          </slide>

          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>

        <vue-easy-lightbox
          :visible="visible"
          :imgs="images1"
          :index="index"
          @hide="handleHide"
        ></vue-easy-lightbox>

        <vue-easy-lightbox
          :visible="visible2"
          :imgs="images2"
          :index="index2"
          @hide="handleHide2"
        ></vue-easy-lightbox>
      </section>

      <section class="retourProjets" @click="closeDetails">
        <h1>
          <i class="fas fa-arrow-circle-left"></i>Retour à la liste des projets
        </h1>
      </section>
    </section>
  </article>
</template>


<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
import VueEasyLightbox from "vue-easy-lightbox";
export default {
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
    txt: {
      type: Array,
      required: true,
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
    LienYT: {
      type: String,
      required: false,
    },
    canva:{
      type:Array,
      required :false,
    },
    GH: {
      type: String,
      required: false,
    },
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
      this.detailsAreVisible = false;

      const projets = document.querySelectorAll(".projetThumb");

      for (let i = 0; i < projets.length; i++) {
        projets[i].style.display = "flex";
      }

      const ListProjets = document.querySelectorAll(".projets");

      for (let i = 0; i < ListProjets.length; i++) {
        if (window.screen.width <= 768) {
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