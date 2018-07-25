<template>
    <div class="text-xs-center">
        <h1>{{title}}</h1>
        <v-container>
            <v-layout row wrap pt-4 pb-4>
                <v-flex xs12 sm6 md6 lg6>
                    <h3>Who are we?</h3>
                    <v-container>
                        <p class="j-text"> {{whoWe.message}} </p>
                    </v-container>
                </v-flex>
                <v-flex xs12 sm6 md6 lg6>
                    <v-card>
                        <v-card-media :src="whoWe.image" height="200px"></v-card-media>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap pt-4>
                <v-flex xs12 sm6 md4 lg4 v-for="(pic, index) in pics" :key="index" px-2 pt-4>
                    <v-card>
                        <v-card-media :src="pic.image" height="200px"></v-card-media>
                    </v-card>
                    <v-card-title>
                        <h3>{{pic.title}}</h3>
                        <p class="j-text">{{pic.message}}</p>
                    </v-card-title>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
  data () {
    return {
        title: 'About Us',
        whoWe: { title: 'Who we are?', image: require('../assets/images/pic5.jpeg'), message: ' We are a company specialized in providing business solution, product management and business equipment, together with our import and export services globally.'},
        pics: [
            { title: 'Mission', image: require('../assets/images/pic6.jpg'), message: 'Our mission is to offer the best services for business solution to companies when it comes to product management import & export services, by optimizing and lowering costs of our clients when managing a product in the international markets.'},
            { title: 'Vision', image: require('../assets/images/pic7.jpg'), message: 'Our vision is to be the best service provider in offering management of products and services for international import & export, always offering a competitive advantage to our customers'},
            { title: 'History', image: require('../assets/images/pic8.jpg'), message: 'Global Trade Industries (GTI) is a company created in November 2015. We have just opened our new warehouse in Miami, FL on October 2016.'}
        ]
    }
  }
}
</script>