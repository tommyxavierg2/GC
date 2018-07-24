<template>
  <div>
    <v-layout row class="gc-blue-background gc-white-text gc-bold">
      <v-card>
        <v-flex xs12 md12 lg12>
          <v-card-media :src="slidePics[0]"></v-card-media>
        </v-flex>
      </v-card>
      <v-flex xs5 md5 lg5 offset-xs1 offset-md1 offset-lg1>
        <h2>Ready to work with us</h2>
      </v-flex>
      <v-flex xs5 md5 lg5 offset-xs1 offset-md1 offset-lg1>
        <v-btn to="/contactUS" class="gc-white-text">Contact Us
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-container class="gc-align-center">
      <v-container>
        <v-container xs12 md12 lg12>
          <h2>About Us</h2>
        </v-container>
        <v-layout row wrap align-center>
          <v-flex xs12 md6 lg6>
            <v-card>
              <v-card flat>
                <v-card-media :src="slidePics[0]"></v-card-media>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <p class="j-text">We are a company specialized in providing business solution, product management and business equipment, together with our import and export services globally.</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <v-container>
          <h2>Our History</h2>
        </v-container>
        <v-layout row wrap>
          <v-flex xs12 md6 lg6>
            <v-card>
              <v-card flat>
                <v-card-media :src="slidePics[0]"></v-card-media>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <p class="j-text">
              Global Trade Industries (GTI) is a company created in November 2015.
              We have just opened our new warehouse in Miami, FL on October 2016.
            </p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn to="/aboutUs" outline flat class="gc-blue-border">Read More</v-btn>
    </v-container>
    <v-container wrap class="gc-align-center">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md3 lg3>
            <v-icon large>people</v-icon>
            <v-container>
              <p class="j-text"> <strong> Management of products and equipment at an international level </strong> </p>
            </v-container>
          </v-flex>
          <v-flex xs12 md3 lg3>
            <v-icon large>send</v-icon>
            <v-container>
              <p class="j-text"> <strong> Import and export services </strong> </p>
            </v-container>
          </v-flex>
          <v-flex xs12 md3 lg3>
            <v-icon large>location_city</v-icon>
            <v-container>
              <p class="j-text"> <strong> 3PL Services </strong> </p>
            </v-container>
          </v-flex>
          <v-flex xs12 md3 lg3>
            <v-icon large>public</v-icon>
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
      slidePics: [
        '../assets/images/pic1.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
