<template>
  <section id="moi">
    <div id="moiImg">
      <img src="../assets/Photo_Profil.jpg" alt="" />
    </div>
    <div id="moiTxt">
      <h2 v-if="lang === 'fr'">Salut la !</h2>
      <h2 v-if="lang === 'en'">Hello there !</h2>

      <p v-if="lang === 'fr'">
        Je m'appelle Mathieu Gaudreau et je suis un jeune <strong>level designer</strong> et <strong>game
          designer</strong> ! J'ai débuté mon parcours académique au Collège de Maisonneuve en intégrant la filière de
        l'<strong>intégration multimédia</strong>. Au cours de cette formation, j'ai acquis de solides compétences dans
        divers logiciels et technologies, notamment <strong>Unity</strong>, la suite <strong>Adobe</strong>, et le
        <strong>développement web</strong>. C'est là que j'ai véritablement découvert ma passion pour la création de
        <strong>jeux vidéo</strong>.
      </p>

      <p v-if="lang === 'fr'">
        J'ai ensuite décidé de poursuivre mon parcours à l'<strong>UQAT</strong> en <strong>création de jeux
          vidéo</strong>, plus spécifiquement en profil <strong>design</strong>. Ce programme m'a offert une opportunité
        exceptionnelle d'acquérir une expertise considérable dans le domaine du <strong>design</strong> et de la
        production de <strong>jeux vidéo</strong>, tout en me permettant de découvrir de nouvelles technologies telles
        qu'<strong>Unreal Engine</strong> et <strong>Notion</strong>, entre autres.

        Mon intérêt pour le <strong>Level design</strong> s'est éveillé grâce aux multiples projets auxquels j'ai
        participé, explorant ainsi diverses branches du <strong>design</strong>, de la <strong>narration</strong> à la
        création de <strong>systèmes</strong> en passant par l'aspect <strong>économique</strong>.
      </p>

      <p v-if="lang === 'fr'">
        En bref, je suis une personne <strong>passionnée</strong> par les projets que j'entreprends. Je suis très
        <strong>débrouillard</strong> et <strong>polyvalent</strong>, ce qui me permet d'aborder diverses tâches avec
        aisance. De plus, je suis quelqu'un avec qui il est <strong>facile de travailler</strong>. J'adore collaborer en
        équipe et je ne recule pas devant les <strong>défis</strong> !
      </p>

      <p v-if="lang === 'en'">
        My name is Mathieu Gaudreau, and I am a young <strong>level designer</strong> and <strong>game designer</strong>!
        I began my academic journey at Collège de Maisonneuve, where I pursued a degree in <strong>multimedia
          integration</strong>. During this program, I gained strong skills in various software and technologies,
        including <strong>Unity</strong>, the <strong>Adobe suite</strong>, and <strong>web development</strong>. It was
        there that I truly discovered my passion for <strong>video game creation</strong>.
      </p>

      <p v-if="lang === 'en'">
        I then decided to continue my journey at <strong>UQAT</strong> in the field of <strong>video game
          creation</strong>, specifically in the <strong>design</strong> profile. This program provided me with an
        exceptional opportunity to acquire substantial expertise in the realm of <strong>design</strong> and <strong>video
          game production</strong>, while also allowing me to discover new technologies such as <strong>Unreal
          Engine</strong> and <strong>Notion</strong>, among others. My interest in <strong>Level design</strong> awakened
        through my involvement in various projects, allowing me to explore different aspects of <strong>design</strong>,
        from <strong>narration</strong> to <strong>system creation</strong>, and even delving into the
        <strong>economic</strong> aspect.
      </p>

      <p v-if="lang === 'en'">

        In short, I am a <strong>passionate</strong> individual about the projects I undertake. I am highly
        <strong>resourceful</strong> and <strong>versatile</strong>, which allows me to tackle various tasks with ease.
        Furthermore, I am someone with whom it is <strong>easy to work</strong>. I love collaborating in teams and I do
        not shy away from <strong>challenges</strong>!
      </p>

      <div>

        <h1 v-if="lang === 'fr'">Pour me contacter :</h1>
        <h1 v-if="lang === 'en'">Find me on :</h1>

        <ul>
          <li>
            <a href="https://www.linkedin.com/in/mathieu-gaudreau-8243a318a" target="_blank"
              title="Voir mon LinkedIn">LinkedIn<i class="fab fa-linkedin"></i></a>
          </li>

          <li>
            <a href="mailto:matgaudreau13@gmail.com" target="_blank" title="Email">Email<i
                class="fas fa-envelope-square"></i></a>
          </li>
          <li>
            <a href="tel:4383969659" target="_blank" title="Telephone">438-396-9659<i class="ph-fill ph-phone"></i></a>
          </li>
        </ul>

      </div>

      <div id="cv">
        <h1>CV :</h1>
        <ul>
          <li>
            <a v-if="lang === 'fr'"
              href="https://drive.google.com/file/d/1TP_te8A8O3WYMINf4lZ0dvPrm_tCZh8t/view?usp=sharing" target="_blank"
              title="Voir mon CV"><i class="fas fa-external-link-square-alt"></i></a>
            <a v-if="lang === 'en'"
              href="https://drive.google.com/file/d/1hI-2MP7hAfWwqcxQ9L_Q8QRU5mCUIoGH/view?usp=sharing" target="_blank"
              title="Check out my CV"><i class="fas fa-external-link-square-alt"></i></a>
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