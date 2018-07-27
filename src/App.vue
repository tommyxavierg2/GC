<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="blue darken-1" height="40px" class="hidden-sm-and-down">
        <v-toolbar-items>
          <v-btn small v-for="moreInfoLine in moreInfoLines" :key="moreInfoLine.icon" flat :href="moreInfoLine.href" target="_blank">
            <v-icon left icon> {{moreInfoLine.icon}} </v-icon>
              {{moreInfoLine.text}}  
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn flat icon v-for="(k, index) in $t('message.langs')" :key="index" @click="$store.commit('setLanguage', k.code.toLowerCase())">{{k.code}}</v-btn>
      </v-toolbar>
      <v-toolbar>
        <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>
          <v-flex>
            <img src="./assets/images/logo.png" alt="Logo" class="logo-principal" width="200px">
          </v-flex>
        </v-toolbar-title>
        <v-spacer></v-spacer>
          <v-btn class="hidden-sm-and-down" flat v-for="(item, index) in items" :key="index" :to="item.route" @click="active = index">
            {{item.name}}
          </v-btn>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute temporary app>
        <v-toolbar flat class="py-2">
          <v-flex mx-auto mt-4 class="text-xs-center">
            <img src="./assets/images/logo.png" alt="Logo" class="logo-principal" width="200px">
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
        <v-footer>
          <v-flex class="text-xs-center">
            <v-btn flat icon>EN</v-btn>
            <v-btn flat icon>ES</v-btn>
          </v-flex>
        </v-footer>
      </v-navigation-drawer>
      <v-content>
        <router-view/>
      </v-content>
        <v-footer dark height="auto">
          <v-card flat tile class="grey darken-3 white--text text-xs-center">
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm12 md5 lg5 xl5 offset-xs1>
                <h3>{{$t("message.about")}}</h3>
                <p>
                  {{$t("message.aboutDescription")}}
                </p>
                <v-btn v-for="socialNetwork in socialNetworks" :key="socialNetwork.icon" :href="socialNetwork.href" target="_blank" 
                  class="mx-3 white--text" icon>
                  <v-icon size="24px">{{ socialNetwork.icon }}</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs12 sm12 md5 lg5 xl5>
                <h3>{{$t("message.contacts")}}</h3>
                <v-layout row wrap>
                  <v-flex class="text-xs-left" xs12 sm12 md9 lg9 xl9 offset-md3 offset-lg3 offset-xl3 v-for="(moreInfoLine, index) in moreInfoLines" :key="index">
                    <v-btn flat small :href="moreInfoLine.href" target="_blank">
                      <v-icon small left>{{moreInfoLine.icon}}</v-icon>
                      {{moreInfoLine.text}}
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-text class="blue darken-1 white--text">
            Copyright &copy; {{ new Date().getFullYear() }} — {{$t("message.rightReserved")}}.
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
      drawer: false,
      active: null,
      items: [
        {name: this.$t("message.home"), icon: 'home', route: '/'},
        {name: this.$t("message.about"), icon: 'help_outline', route: '/aboutUs'},
        {name: this.$t("message.services"), icon: 'assistant', route: '/services'},
        {name: this.$t("message.contactUs"), icon: 'phone', route: '/contactUs'}
      ],
      moreInfoLines: [
        { icon: 'phone', text: '954-533-3379', href: 'tel: 954-533-3379' },
        { icon: 'email', text: 'info@globaltradee.com', href: 'mailto:info@globaltradee.com' },
        { icon: 'location_on', text: '5367 N Hiatus Road, Sunrise Florida 33351', href: "https://www.google.com/maps/place/North+Hiatus+Road,+Plantation,+FL,+EE.+UU./@26.1334538,-80.29958,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9088b68bc8401:0x52d38f691bf513c2!8m2!3d26.133449!4d-80.2973913"}
      ],
      socialNetworks: [
        { title: 'facebook', icon: 'fab fa-facebook', href: '' },
        { title: 'twitter', icon: 'fab fa-twitter', href: '' },
        { title: 'linkedin', icon: 'fab fa-linkedin', href: '' },
        { title: 'instagram', icon: 'fab fa-instagram', href: '' }
      ]
    }
  },
  watch: {
    'this.$store.state.lang'(newVal, oldVal) {
      this.$store.commit('setLanguage', newVal);
      this.items[0].name = this.$t("message.home");
      this.items[1].name = this.$t("message.about");
      this.items[2].name = this.$t("message.services");
      this.items[3].name = this.$t("message.contactUs");
    }
  },
  created() {
    let saveLanguage = localStorage.getItem('data');
    saveLanguage === 'en' ? localStorage.setItem('data', 'en') : localStorage.setItem('data', 'es');
    console.log(this.items[0].name);
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
