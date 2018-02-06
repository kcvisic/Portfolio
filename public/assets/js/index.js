 Vue.use(Vuetify);
 Vue.use(VueRouter)

const Portfolio = {

  template: `
    <div>

    <v-layout elevation-24>
       <v-flex xs12>
         <v-card class="white">
           <v-container fluid :grid-list-md = "true" elevation-24>
             <v-layout row wrap>
               <v-flex
                 sm6
                 v-for="(i, index) in images"
                 :key="i"
               >
                 <v-card tile style="margin:15px">
                   <v-card-media
                    :src="i"
                     height="150px"
                    :class= "classHover"
                    @click.native="openLinks(links[index])"
                   >

                   </v-card-media>
                   <v-card-title primary-title>
                     <div>
                       <div class="headline">{{title[index]}}</div>
                       <span class="grey--text">{{discription[index]}}</span>
                     </div>
                   </v-card-title>
                   <v-card-actions class="white">
                     <v-btn flat color="black"
                       @click.native="openLinks(githubLinks[index])">Github</v-btn>
                     <v-btn flat color="purple"
                       @click.native="openLinks(links[index])">Demo</v-btn>
                     <v-spacer></v-spacer>
                     <v-btn icon @click.native="show = !show">
                       <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                     </v-btn>
                   </v-card-actions>
                   <v-slide-y-transition>
                   <v-card-text v-show="show">
                      <span class="grey--text">{{technology[index]}}</span>
                   </v-card-text>
                   </v-slide-y-transition>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </v-card>
       </v-flex>
     </v-layout>
    </div>
    `,
    data: function(){
      return {
        show:false,

        githubLinks:[
          "https://github.com/kcvisic/All-Ears-",
          "https://github.com/kcvisic/week-4-game",
          "https://github.com/kcvisic/Burger",
          "https://github.com/kcvisic/Recipes",
          "https://github.com/kcvisic/Trivia-Game",
          "https://github.com/kcvisic/Hangman-Game",
        ],
        discription:[
          "Acoustic Chat Rooms",
          "Match a Winning Number",
          "Create your own Burger",
          "Recipe Creation Application",
          "Guess a Super Hero's Secret Identity",
          "Guess a Phrase",


        ],

        title:[
          "All Ears",
          "GemGame",
          "Eat Da Burger",
          "Service",
          "TriviaGame",
          "Hangman",

        ],

          images:[
            "assets/images/all-ears.png",
            "assets/images/GemGame.png",
            "assets/images/Burger.jpg",
            "assets/images/recipe.png",
            "assets/images/TriviaGame.png",
            "assets/images/Hangman.png",
          ],
          links: [
            "https://all-ears.herokuapp.com/",
            "https://gem-game.herokuapp.com/",
            "https://burger-eat-the-burger.herokuapp.com/",
            "https://recipes-service-.herokuapp.com/",
            "https://trivia-superhero-secret-identy.herokuapp.com/",
            "https://hangman-game-.herokuapp.com/",


          ],
          technology:[
            "Technology used: Javacript, reactJS, MySQL, Sequelize, Bootstrap, NodeJS, Express, YouTube API",
            "Technology used: Javacript, JQuery, Bootstrap, NodeJS",
            "Technology used: Javacript, JQuery, Bootstrap, NodeJS, Express, MySQL, Sequelize, Handlebars",
            "Technology used: Javacript, JQuery, NodeJS, Express, MySQL, Sequelize, Vue.js, Vuetify.js",
            "Technology used: Javacript, JQuery, Bootstrap, NodeJS",
            "Technology used: Javacript, JQuery, Bootstrap, NodeJS",
          ],
          classHover: "customClassImg",
      }
    },
    methods: {
      openLinks: function(link){
        window.open(link);
      }
    },
}

const Contact = {template: `
  <div id="contactToolbar">

  <v-flex >
    <v-card elevation-24>
      <v-toolbar id="connectNavBar">
        <v-toolbar-title>
        <v-btn large @click="show3 = !show3"
          id="AboutBtn" elevation-24><strong> <v-icon large color="#FFC857">phone</v-icon></strong></v-btn>
        <v-btn large @click="show = !show"
          id="AboutBtn" elevation-24 ><strong> <v-icon large color="#FFC857">mail</v-icon></strong></v-btn>

        </v-toolbar-title>
        </v-toolbar>
        <v-container fluid id="aboutPortfolio" elevation-24>
          <v-layout>
            <v-flex>
              <v-card class="background" elevation-24 >
              <transition name="bounce"> <h1 v-if="show3" style="padding-left:30px; color:#2E4052;">
               </br>
               Cell: 240-476-1061
               </h1>
              </transition>
              <transition name="bounce"> <h1 v-if="show" style="padding-left:30px; color:#2E4052;">
               </br>
               Email: Kcvisic@gmail.com
               </h1>
              </transition>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-card>
  </v-flex>
  </div>
  `,
  data: function(){
    return {
        show: false,
        show3: false,

      }
    },
}
const Home = {template: `
  <v-container elevation-24>

  <v-card class="background">
    <v-avatar size="100px" style="display: flex;margin: auto; padding-top: 20px;">
      <img src="assets/images/profile.jpg"></img>
    </v-avatar>

    <v-card-title primary-title>
    <div>
      <p class="about-me">
        Hi, and welcome to my Portfolio! I recently graduated from
        Montgomery College with a degree in General Education. When I
        started my education at Montgomery College, I planned on pursuing a degree
        in medicine, specifically nursing. Quite by accident I was introduced to
        programming and developed an unexpected and keen interest in designing and
        developing applications. With this realization, I shifted my attention to
        front end development. After a lot of hard work and intensive learning, I
        have earned a Web Developer Certification from The George Washington University.
        I am now interested in leveraging my passion and education to find a development
        position where I can continue this exciting journey.
      </p>
    </div>
    </v-card-title>
  </v-card>
  </v-container>
  `,

  }
const routes =[
  {path: "/", component: Home},
  {path:"/portfolio", component: Portfolio},
  {path: "/contact", component: Contact}
]

const router = new VueRouter({
  routes
})


var app = new Vue({
  el: "#app",
  data: {
      show2: false,

  },
  router

})
