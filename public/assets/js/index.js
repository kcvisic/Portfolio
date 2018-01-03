 Vue.use(Vuetify);
 Vue.use(VueRouter)

const Portfolio = {

  template: `
    <div>
    <v-layout>
       <v-flex xs12>
         <v-card class="background">
           <v-container fluid :grid-list-md = "true">
             <v-layout row wrap>
               <v-flex
                 sm6
                 v-for="(i, index) in images"
                 :key="i"
               >
                 <v-card flat tile>
                   <v-card-media
                    :src="i"
                     height="150px"
                    :class= "classHover"
                    @click.native="openLinks(links[index])"
                   >
                   </v-card-media>
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
          images:[
            "assets/images/GemGame.png",
            "assets/images/FriendFinder.png",
            "assets/images/Burger.jpg",
            "assets/images/recipe.png",
            "assets/images/TriviaGame.png",
            "assets/images/Hangman.png",
          ],
          links: [
            "https://gem-game.herokuapp.com/",
            "https://f-rend-finder.herokuapp.com/",
            "https://burger-eat-the-burger.herokuapp.com/",
            "https://recipes-service-.herokuapp.com/",
            "https://trivia-superhero-secret-identy.herokuapp.com/",
            "https://hangman-game-.herokuapp.com/",


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
  <div>
  <v-layout>
       <v-flex xs12>
         <v-card class="background">
         <v-toolbar>
           <v-toolbar-title>
           <strong><h4>Email: kcvisic@gmail.com</h4></strong>
            <strong><h4>Phone: (240-476 1061)</h4></strong>
             </v-toolbar-title>
             </v-toolbar>
         </v-card>
      </v-flex>
  </v-layout>
  </div>
  `}
const Home = {template: `
  <v-card class="background">
    <img src="assets/images/profile.jpg" height="200px" width="150px" class="ml-3" style="border-radius: 25px;margin-top:10px"></img>
    <v-card-title primary-title>
      <v-layout>
        <v-flex>
          <v-btn large @click="show = !show" id="AboutBtn"><strong>About</strong></v-btn>
          <transition name="bounce">
            <p v-if="show">Hi Welcome to my Portfolio!<br /> I recently graduated from Montgomery College with a degree in General Education. When I first came to Montgomery College, I planned on pursuing a degree in medicine, specially nursing. Not too long
              ago, I was unintentionally introduced to programming and developed an unforeseen interest in designing and developing applications. That is when I shifted my attention towards front end development. After months of hard work and
              intensive learning, I have earned a Web developer certification from George Washington University.</p>
          </transition>
        </v-flex>
      </v-layout>
    </v-card-title>
  </v-card>
  `,
  data:function(){
    return {
      show: false,

    }
}
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
