<template>
  <div v-resize="onResize" class="text-xs-center">
    <v-layout row wrap class="gc-blue-background gc-white-text gc-bold">
      <v-flex xs12 md12 lg12>
        <v-card flat>
          <v-card-media :src="slidePic" :height="windowsSize.x > 776 ? '600px' : '200px' ">
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
        <h2>Ready to work with us?</h2>
      </v-flex>
      <v-flex xs12 md5 lg5 offset-xs1 offset-md1 offset-lg1>
        <v-btn flat to="/contactUS" color="white"> <strong>Contact Us</strong>
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-container>
      <v-container>
        <v-container xs12 sm12 md12 lg12>
          <h2>About Us</h2>
        </v-container>
        <v-layout row wrap>
          <v-flex xs12 sm5 md5 lg5 offset-xs1 offset-md1 offset-lg1 mb-4>
            <v-card>
              <v-card flat>
                <v-card-media :src="slidePics[3]" height="200px" width="300px"></v-card-media>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex xs12 sm5 md5 lg5 offset-xs1 offset-md1 offset-lg1>
            <p class="j-text">We are a company specialized in providing business solution, product management and business equipment, together with our import and export services globally.</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <v-container>
          <h2>Our History</h2>
        </v-container>
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 lg12>
            <p>Global Trade Industries (GTI) is a company created in November 2015.</p>
            <p>We have just opened our new warehouse in Miami, FL on October 2016.</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn to="/aboutUs" outline flat class="gc-blue-border">Read More</v-btn>
    </v-container>
    <v-container wrap>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm3 md3 lg3>
            <v-icon large color="blue darken-1">people</v-icon>
            <v-container>
              <p class="j-text"> <strong> Management of products and equipment at an international level </strong> </p>
            </v-container>
          </v-flex>
          <v-flex xs12 sm3 md3 lg3>
            <v-icon large color="blue darken-1">send</v-icon>
            <v-container>
              <p class="j-text"> <strong> Import and export services </strong> </p>
            </v-container>
          </v-flex>
          <v-flex xs12 sm3 md3 lg3>
            <v-icon large color="blue darken-1">location_city</v-icon>
            <v-container>
              <p class="j-text"> <strong> 3PL Services </strong> </p>
            </v-container>
          </v-flex>
          <v-flex xs12 sm3 md3 lg3>
            <v-icon large color="blue darken-1">public</v-icon>
            <v-container>
              <p class="j-text"> <strong> Merchandise consolidation </strong> </p>
            </v-container>
          </v-flex>
        </v-layout>
        <v-btn to="/services" outline flat class="gc-blue-border">Read More</v-btn>
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
