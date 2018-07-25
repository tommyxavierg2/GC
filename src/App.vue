<template>
  <div id="app">
    <v-app>
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
      <v-content class="mt-4">
        <router-view/>
      </v-content>
      <v-footer class="pa-3 justify-center">
        <div>&copy; {{ new Date().getFullYear() }} - Copyright 2016. All right reserved. </div>
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
      items: [
        {name: 'Home', icon: 'home', route: '/'},
        {name: 'About Us', icon: 'help_outline', route: '/aboutUs'},
        {name: 'Services', icon: 'assistant', route: '/services'},
        {name: 'Contact Us', icon: 'phone', route: '/contactUs'}
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
