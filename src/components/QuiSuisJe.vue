<template>
  <section id="moi">
    <div id="moiImg">
      <img src="../assets/baroque.jpg" alt="" />
    </div>
    <div id="moiTxt">
      <h2 v-if="lang === 'fr'">Salut la !</h2>
      <h2 v-if="lang === 'en'">Hello there !</h2>
      <p v-if="lang === 'fr'">
        Je m'appelle Mathieu Gaudreau, je suis un jeune diplômé de technique
        d’intégration multimédia du collège de Maisonneuve.
      </p>

      <p v-if="lang === 'en'">
        My name is Mathieu Gaudreau, I am a young graduate from the techniques of multimedia
        integration at Collège de Maisonneuve.
      </p>

      <p v-if="lang === 'fr'">
        Je suis un passionné de jeux vidéo, de design de jeu, de concept sonore,
        de web, de musique et de graphisme.
      </p>

      <p v-if="lang === 'en'">
        I am passionate about video games, game design, sound concept, web,
        music, and graphic design.
      </p>

      <p v-if="lang === 'fr'">Pour un projet,</p>
      <p v-if="lang === 'en'">For a project,</p>
      <div>
        <h1 v-if="lang === 'fr'">Retrouvez moi sur :</h1>
        <h1 v-if="lang === 'en'">Find me on :</h1>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/mathieu-gaudreau-8243a318a"
              target="_blank"
              title="Voir mon LinkedIn"
              >LinkedIn<i class="fab fa-linkedin"></i
            ></a>
          </li>

          <li>
            <a
              href="https://github.com/MathieuGaudreau"
              target="_blank"
              title="Voir mon GitHub !"
              >GitHub<i class="fab fa-github-square"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    lang: {},
  },
};
</script>