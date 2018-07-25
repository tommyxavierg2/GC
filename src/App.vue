<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="blue darken-1" height="40px" class="hidden-sm-and-down">
        <v-toolbar-items>
          <v-btn v-for="moreInfoLine in moreInfoLines" :key="moreInfoLine.icon" flat :href="moreInfoLine.href" target="_blank">
            <v-icon left icon> {{moreInfoLine.icon}} </v-icon>
              {{moreInfoLine.text}}  
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-toolbar>
        <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>
          <v-container ml-4>
            <v-flex ml-4>
              <img src="./assets/images/logo.png" alt="Logo" class="logo-principal">
            </v-flex>
          </v-container>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat v-for="(item, index) in items" :key="index" :to="item.route">{{item.name}}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute temporary app>
        <v-toolbar flat>
          <v-flex class="mx-auto mt-4">
            <img src="./assets/images/logo.png" alt="Logo" class="logo-principal">
          </v-flex>
        </v-toolbar>
        <v-list class="pa-1 mt-3">
          <v-list-tile v-for="(item, index) in items" :key="index" :to="item.route">
            <v-list-tile-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <router-view/>
      </v-content>
        <v-footer
        dark
        height="auto"
        >
          <v-card
          flat
          tile
          class="grey darken-3 white--text text-xs-center"
          >
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm12 md6 lg6 xl6>
                <h3>About Us</h3>
                <p>
                  Global trade Industries (GTI) is company specialized in providing business solution, product management and business equipment, together with our import and export services globally
                </p>
                <v-btn
              v-for="socialNetwork in socialNetworks"
              :key="socialNetwork.icon"
              :href="socialNetwork.href"
              target="_blank"
              class="mx-3 white--text"
              icon
            >
              <v-icon size="24px">{{ socialNetwork.icon }}</v-icon>
            </v-btn>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6 xl6>
                <h3>Contact</h3>
                <v-layout row wrap>
                  <v-flex class="text-xs-left" xs12 sm12 md9 lg9 xl9 offset-md3 offset-lg3 offset-xl3 v-for="(moreInfoLine, index) in moreInfoLines" :key="index">
                    <v-btn flat :href="moreInfoLine.href" target="_blank">
                      <v-icon left>{{moreInfoLine.icon}}</v-icon>
                      {{moreInfoLine.text}}
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-text class="blue darken-1 white--text">
            Copyright &copy; {{ new Date().getFullYear() }} — All right reserved.
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
      drawer: false,
      items: [
        {name: 'Home', icon: 'home', route: '/'},
        {name: 'About Us', icon: 'help_outline', route: '/aboutUs'},
        {name: 'Services', icon: 'assistant', route: '/services'},
        {name: 'Contact Us', icon: 'phone', route: '/contactUs'}
      ],
      moreInfoLines: [
        { icon: 'phone', text: '954-533-3379', href: 'tel: 954-533-3379' },
        { icon: 'email', text: 'info@globaltradee.com', href: 'mailto:info@globaltradee.com' },
        { icon: 'location_on', text: 'N Hiatus Road, Sunrise Florida 33351', href: "https://www.google.com/maps/place/North+Hiatus+Road,+Plantation,+FL,+EE.+UU./@26.1334538,-80.29958,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9088b68bc8401:0x52d38f691bf513c2!8m2!3d26.133449!4d-80.2973913"}
      ],
      socialNetworks: [
        { title: 'facebook', icon: 'fab fa-facebook', href: '' },
        { title: 'twitter', icon: 'fab fa-twitter', href: '' },
        { title: 'linkedin', icon: 'fab fa-linkedin', href: '' },
        { title: 'instagram', icon: 'fab fa-instagram', href: '' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #F5F5F5;
}

.gc-blue-background {
  background-color: #2196f3;
}

.gc-white-text {
  color: white;
}

.gc-bold {
  font: bold;
}

.gc-blue-border {
  color: #23A5DC;
}

.gc-orange-bg {
  background-color: #E9680E;
}

.gc-align-center {
  text-align: center;
}

</style>
