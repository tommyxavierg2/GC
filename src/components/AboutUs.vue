<template>
    <div class="text-xs-center">
        <h1 class="mt-4">{{title}}</h1>
        <v-container>
            <v-layout row wrap pt-4 pb-4>
                <v-flex xs12 sm6 md6 lg6>
                    <h3></h3>
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
                        <h3 class="mx-auto">{{pic.title}}</h3>
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
        title: this.$t("message.about"),
        whoWe: { title: this.$t("message.waw"), image: require('../assets/images/pic5.jpeg'), message: this.$t("message.aboutDescription")},
        pics: [
            { title: this.$t("message.mission"), image: require('../assets/images/pic6.jpg'), message: this.$t("message.ourMission")},
            { title: this.$t("message.vision"), image: require('../assets/images/pic7.jpg'), message: this.$t("message.ourVision")},
            { title: this.$t("message.history"), image: require('../assets/images/pic8.jpg'), message: `${this.$t("message.globalCreated")} ${this.$t("message.openedWarehouse")}`}
        ]
    }
  }
}
</script>