<template>
  <section id="tri">
    <ul>
      <li :title="lang === 'fr' ? 'Voir tous les projets !' : 'See all my projects !'" :class="{ active: triTous }"
        @click="triTousMethod">
        {{ lang === 'fr' ? 'Tous' : 'All' }}
      </li>

      <li :title="lang === 'fr' ? 'Voir les projets de jeux vidéo !' : 'See all my video games !'"
        :class="{ active: triJeuxVideo }" @click="triJeuxVideoMethod">
        {{ lang === 'fr' ? 'Design de niveaux' : 'Level Design' }}
      </li>

      <li :title="lang === 'fr' ? 'Voir les projets de jeux de table !' : 'See all my board games !'"
        :class="{ active: triJeuxTable }" @click="triJeuxTableMethod">
        {{ lang === 'fr' ? 'Design de jeux' : 'Game Design' }}
      </li>

      <li :title="lang === 'fr' ? 'Voir les projets création !' : 'See all my other creations !'"
        :class="{ active: triCreation }" @click="triCreationMethod">
        {{ lang === 'fr' ? 'Autres' : 'Others' }}
      </li>

      <!-- Uncomment this block when needed -->
      <!-- <li title="Voir les projets web !" :class="{ active: triWeb }" @click="triWebMethod">Web</li> -->
    </ul>
    <div class="border"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      triTous: true, // Default active type
      triJeuxVideo: false,
      triJeuxTable: false,
      triCreation: false,
      // triWeb: false,
    };
  },
  methods: {
    setActiveClass(type) {
      return { active: this[type] };
    },
    setWidth(elements, width) {
      elements.forEach((element) => (element.style.width = width));
    },
    hideElements(elements) {
      elements.forEach((element) => (element.style.width = '0'));
    },
    // Uncomment this method when needed
    // triWebMethod() {
    //   this.triWeb = true;
    //   this.setWidth(document.querySelectorAll('.web'), window.screen.width < 1024 ? '100%' : '40%');
    //   this.hideElements(document.querySelectorAll('.autre, .designLevel, .designJeu'));
    // },
    triCreationMethod() {
      this.triTous = this.triJeuxVideo = this.triJeuxTable = this.triCreation = false;
      this.triCreation = true;
      this.setWidth(document.querySelectorAll('.autre'), window.screen.width < 1024 ? '100%' : '40%');
      this.hideElements(document.querySelectorAll('.designLevel, .designJeu'));
    },
    triJeuxVideoMethod() {
      this.triTous = this.triJeuxVideo = this.triJeuxTable = this.triCreation = false;
      this.triJeuxVideo = true;
      this.setWidth(document.querySelectorAll('.designLevel'), window.screen.width < 1024 ? '100%' : '40%');
      this.hideElements(document.querySelectorAll('.autre, .designJeu'));
    },
    triJeuxTableMethod() {
      this.triTous = this.triJeuxVideo = this.triJeuxTable = this.triCreation = false;
      this.triJeuxTable = true;
      this.setWidth(document.querySelectorAll('.designJeu'), window.screen.width < 1024 ? '100%' : '40%');
      this.hideElements(document.querySelectorAll('.autre, .designLevel'));
    },
    // triWebMethod() {
    //   this.triTous = this.triJeuxVideo = this.triJeuxTable = this.triCreation = this.triWeb = false;
    //   this.triWeb = true;
    //   this.setWidth(document.querySelectorAll('.web'), window.screen.width < 1024 ? '100%' : '40%');
    //   this.hideElements(document.querySelectorAll('.autre, .designLevel, .designJeu'));
    // },
    triTousMethod() {
      this.triTous = this.triJeuxVideo = this.triJeuxTable = this.triCreation = false;
      this.triTous = true;
      this.setWidth(document.querySelectorAll('.autre, .designLevel, .designJeu'), window.screen.width < 1024 ? '100%' : '40%');
    },
  },
  props: {
    lang: {},
  },
};
</script>
