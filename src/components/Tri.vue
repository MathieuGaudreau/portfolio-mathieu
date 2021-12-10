<template>
  <section id="tri">
    <ul>
      <li v-if="lang==='fr'" title="Voir tous les projets !" class="active" id="tous" @click="triTous">Tous</li>
      <li v-if="lang==='en'" title="See all my projects !" class="active" id="tous" @click="triTous">All</li>
      <li v-if="lang==='fr'" title="Voir les projets de jeux vidéo !" id="jeuxVideo" @click="triJeuxVideo">Jeux Vidéo</li>
      <li v-if="lang==='en'" title="See all my video games !" id="jeuxVideo" @click="triJeuxVideo">Video Games</li>
      <li v-if="lang==='fr'" title="Voir les projets de jeux de table !" id="jeuxTable" @click="triJeuxTable">Jeux De Table</li>
      <li v-if="lang==='en'" title="See all my board games !" id="jeuxTable" @click="triJeuxTable">Board Games</li>
      <li v-if="lang==='fr'" title="Voir les projets création !" id="creation" @click="triCreation">Créations</li>
      <li v-if="lang==='en'" title="See all my other creations !" id="creation" @click="triCreation">Creations</li>
      <!-- <li title="Voir les projets web !" id="web" @click="triWeb">Web</li> -->
      
    </ul>
    <div class="border"></div>
  </section>
</template>

<script>
export default {
  methods: {
    triCreation() {
      const triCreation = document.getElementById("creation");
      triCreation.classList.add("active");

      const triJeuxVideo = document.getElementById("jeuxVideo");
      triJeuxVideo.classList.remove("active");

      const triJeuxTable = document.getElementById("jeuxTable");
      triJeuxTable.classList.remove("active");

      // const triWeb = document.getElementById("web");
      // triWeb.classList.remove("active");

      const triTous = document.getElementById("tous");
      triTous.classList.remove("active");

      const creation = document.querySelectorAll(".creation");
      for (let i = 0; i < creation.length; i++) {
        if (window.screen.width < 1024) {
          creation[i].style.width="100%";
        }
        else{
          creation[i].style.width = "40%";
        }
      }

      const jeu = document.querySelectorAll(".jeu");
      for (let i = 0; i < jeu.length; i++) {
        jeu[i].style.width = "0";
      }

      const jeuxTable = document.querySelectorAll(".jeuTable");
      for (let i = 0; i < jeuxTable.length; i++) {
        jeuxTable[i].style.width = "0";
      }

      // const web = document.querySelectorAll(".web");
      // for (let i = 0; i < web.length; i++) {
      //   web[i].style.width = "0";
      // }
    },

    triJeuxVideo() {
      const triCreation = document.getElementById("creation");
      triCreation.classList.remove("active");

      const triJeux = document.getElementById("jeuxVideo");
      triJeux.classList.add("active");

      const triJeuxTable = document.getElementById("jeuxTable");
      triJeuxTable.classList.remove("active");

      // const triWeb = document.getElementById("web");
      // triWeb.classList.remove("active");

      const triTous = document.getElementById("tous");
      triTous.classList.remove("active");

      const creation = document.querySelectorAll(".creation");
      for (let i = 0; i < creation.length; i++) {
        creation[i].style.width = "0";
      }

      const jeuxTable = document.querySelectorAll(".jeuTable");
      for (let i = 0; i < jeuxTable.length; i++) {
        jeuxTable[i].style.width = "0";
      }

      const jeu = document.querySelectorAll(".jeu");
      for (let i = 0; i < jeu.length; i++) {
        
        if (window.screen.width < 1024) {
          jeu[i].style.width="100%";
        }
        else{
          jeu[i].style.width = "40%";
        }
      }

      // const web = document.querySelectorAll(".web");
      // for (let i = 0; i < web.length; i++) {
      //   web[i].style.width = "0";
      // }
    },

    triJeuxTable() {
      const triCreation = document.getElementById("creation");
      triCreation.classList.remove("active");

      const triJeuxVideo = document.getElementById("jeuxVideo");
      triJeuxVideo.classList.remove("active");

      const triJeuxTable = document.getElementById("jeuxTable");
      triJeuxTable.classList.add("active");

      // const triWeb = document.getElementById("web");
      // triWeb.classList.remove("active");

      const triTous = document.getElementById("tous");
      triTous.classList.remove("active");

      const creation = document.querySelectorAll(".creation");
      for (let i = 0; i < creation.length; i++) {
        creation[i].style.width = "0";
      }

      const jeuxVideo = document.querySelectorAll(".jeu");
      for (let i = 0; i < jeuxVideo.length; i++) {
        jeuxVideo[i].style.width = "0";
      }

      const jeuxTable = document.querySelectorAll(".jeuTable");
      for (let i = 0; i < jeuxTable.length; i++) {
        
        if (window.screen.width < 1024) {
          jeuxTable[i].style.width="100%";
        }
        else{
          jeuxTable[i].style.width = "40%";
        }
      }

      // const web = document.querySelectorAll(".web");
      // for (let i = 0; i < web.length; i++) {
      //   web[i].style.width = "0";
      // }
    },

    // triWeb() {
    //   const triCreation = document.getElementById("creation");
    //   triCreation.classList.remove("active");

    //   const triJeux = document.getElementById("jeux");
    //   triJeux.classList.remove("active");

    //   const triWeb = document.getElementById("web");
    //   triWeb.classList.add("active");

    //   const triTous = document.getElementById("tous");
    //   triTous.classList.remove("active");

    //   const creation = document.querySelectorAll(".creation");
    //   for (let i = 0; i < creation.length; i++) {
    //     creation[i].style.width = "0";
    //   }

    //   const jeu = document.querySelectorAll(".jeu");
    //   for (let i = 0; i < jeu.length; i++) {
    //     jeu[i].style.width = "0";
    //   }

    //   const web = document.querySelectorAll(".web");
    //   for (let i = 0; i < web.length; i++) {
    //     if (window.screen.width < 1024) {
    //       web[i].style.width="100%";
    //     }
    //     else{
    //       web[i].style.width = "40%";
    //     }
        
    //   }
    // },
    
    triTous() {
      const triCreation = document.getElementById("creation");
      triCreation.classList.remove("active");

      const triJeux = document.getElementById("jeuxVideo");
      triJeux.classList.remove("active");

      const triJeuxTable = document.getElementById("jeuxTable");
      triJeuxTable.classList.remove("active");

      // const triWeb = document.getElementById("web");
      // triWeb.classList.remove("active");

      const triTous = document.getElementById("tous");
      triTous.classList.add("active");

      const creation = document.querySelectorAll(".creation");
      for (let i = 0; i < creation.length; i++) {
        if (window.screen.width < 1024) {
          creation[i].style.width="100%";
        }
        else{
          creation[i].style.width = "40%";
        }
      }

      const jeu = document.querySelectorAll(".jeu");
      for (let i = 0; i < jeu.length; i++) {
        if (window.screen.width < 1024) {
          jeu[i].style.width="100%";
        }
        else{
          jeu[i].style.width = "40%";
        }
      }

      const jeuxTable = document.querySelectorAll(".jeuTable");
      for (let i = 0; i < jeuxTable.length; i++) {
        
        if (window.screen.width < 1024) {
          jeuxTable[i].style.width="100%";
        }
        else{
          jeuxTable[i].style.width = "40%";
        }
      }

      // const web = document.querySelectorAll(".web");
      // for (let i = 0; i < web.length; i++) {
      //   if (window.screen.width < 1024) {
      //     web[i].style.width="100%";
      //   }
      //   else{
      //     web[i].style.width = "40%";
      //   }
      // }
    },
  },
  props:{
    lang:{}
  }
};
</script>