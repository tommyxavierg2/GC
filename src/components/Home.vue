<template>
  <div v-resize="onResize" class="text-xs-center">
    <v-layout row wrap class="gc-blue-background gc-white-text gc-bold">
      <v-flex xs12 md12 lg12>
        <v-card flat>
          <v-card-media :src="slidePic" :height="windowsSize.x > 776 ? '800px' : '200px' ">
            <v-btn flat left round absolute small @click="nextPrevImage(slidePics)" style="top: 50%;">
              <v-icon color="white">keyboard_arrow_left</v-icon>
            </v-btn>
            <v-btn flat right round absolute small @click="nextPrevImage(slidePics)" style="top: 50%;">
              <v-icon color="white">keyboard_arrow_right</v-icon>
            </v-btn>
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs12 md5 lg5 offset-xs1 offset-md1 offset-lg1>
        <h2>{{this.$t("message.readyWork")}}</h2>
      </v-flex>
      <v-flex xs12 md5 lg5 offset-xs1 offset-md1 offset-lg1>
        <v-btn flat to="/contactUS" color="white"> <strong>{{this.$t("message.contactUs")}}</strong>
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-container>
      <v-container>
        <h2>{{this.$t("message.about")}}</h2>
        <v-layout row wrap pt-3>
          <v-flex xs12 sm5 md5 lg5 offset-xs1 offset-md1 offset-lg1>
            <v-card flat>
              <v-card-media :src="slidePics[3]" height="200px" width="300px"></v-card-media>
            </v-card>
          </v-flex>
          <v-flex xs12 sm5 md5 lg5 offset-xs1 offset-md1 offset-lg1>
            <p class="j-text">{{this.$t("message.weAre")}}</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <h2>{{this.$t("message.ourHistory")}}</h2>
        <v-layout row wrap pt-3>
          <v-flex xs12 sm12 md12 lg12>
            <p>{{this.$t("message.globalCreated")}}</p>
            <p>{{this.$t("message.openedWarehouse")}}</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn to="/aboutUs" outline flat class="gc-blue-border">{{this.$t("message.readMore")}}</v-btn>
    </v-container>
    <v-container wrap>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm3 md3 lg3>
            <v-icon large color="blue darken-1">people</v-icon>
            <v-container>
              <p class="j-text"> <strong> {{this.$t("message.managementLevel")}} </strong> </p>
            </v-container>
          </v-flex>
          <v-flex xs12 sm3 md3 lg3>
            <v-icon large color="blue darken-1">send</v-icon>
            <v-container>
              <p class="j-text"> <strong> {{this.$t("message.imEx")}} </strong> </p>
            </v-container>
          </v-flex>
          <v-flex xs12 sm3 md3 lg3>
            <v-icon large color="blue darken-1">location_city</v-icon>
            <v-container>
              <p class="j-text"> <strong> {{this.$t("message.3PLservices")}} </strong> </p>
            </v-container>
          </v-flex>
          <v-flex xs12 sm3 md3 lg3>
            <v-icon large color="blue darken-1">public</v-icon>
            <v-container>
              <p class="j-text"> <strong> {{this.$t("message.mercConsolidation")}} </strong> </p>
            </v-container>
          </v-flex>
        </v-layout>
        <v-btn to="/services" outline flat class="gc-blue-border">{{this.$t("message.readMore")}}</v-btn>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Home',
      windowsSize: { x: null, y: null },
      slidePic: require('../assets/images/pic1.jpg'),
      slidePics: [
        require('../assets/images/pic1.jpg'),
        require('../assets/images/pic2.jpeg'),
        require('../assets/images/pic3.jpeg'),
        require('../assets/images/pic4.jpeg')
      ]
    }
  },

  methods: {

    changeImages() {
      let index = 0;
      setInterval(() => {
          this.slidePic = this.slidePics[index];
          index++;
          if(index > 2)
              index = 0;
      }, 10000);
    },

    nextPrevImage(images) {
      let index = images.findIndex(img => img === this.slidePic);
      index++;
        if ( index < 3)
            this.slidePic = images[index]
        else
        this.slidePic = images[0];
    },
    
    onResize() {
      this.windowsSize = { 
          x: window.innerWidth, 
          y: window.innerHeight 
      };
    },

  },

  created() {
    this.changeImages();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
