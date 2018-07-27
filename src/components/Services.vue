<template>
    <div class="text-xs-center">
        <h1 class="mt-4">{{title}}</h1>
        <v-container>
            <v-layout row wrap pb-4>
                <v-flex xs12 sm7 md7 lg7>
                    <p class="text-sm-left"> 
                        <strong> {{`${$t("message.managementLevel")}:`}} </strong> {{$t("message.beNumberOne")}}
                    </p>
                </v-flex>
                <v-flex xs12 sm4 md4 lg4 offset-xs1>
                    <v-card>
                        <v-card-media :src="managementProductImg" height="200px"></v-card-media>
                    </v-card>
                </v-flex>
            </v-layout>
            <h4 class="text-sm-left">{{$t("message.tradeLogistic")}}</h4>
            <v-layout row wrap pb-4>
                <v-flex xs12 sm7 md7 lg7 pt-4>
                    <ul class="text-sm-left">
                        <li v-for="(service, index) in tradeAndServices" :key="index" class="text-sm-left"> {{service}} </li>
                    </ul>
                </v-flex>
                <v-flex xs12 sm7 md4 lg4 pt-1 offset-xs1>
                    <v-layout row wrap v-for="(pic, index) in tradeAndServicesPics" :key="index">
                        <v-flex xs12 md12 lg12 pt-4>
                            <v-card>
                                <v-card-media :src="pic" height="200px"></v-card-media>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <h4 class="text-sm-left">{{$t("message.3PLservices")}} (Third-party Logistics):</h4>
            <v-layout row wrap pb-4>
                <v-flex xs12 sm7 md7 lg7 pt-1>
                    <ul class="text-sm-left">
                        <li v-for="(service, index) in services3p" :key="index"> {{service}} </li>
                    </ul>
                </v-flex>
                <v-flex xs12 sm4 md4 lg4 offset-xs1>
                    <v-card>
                        <v-card-media :src="services3pPic" height="200px"></v-card-media>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
  data () {
    return {
        title: this.$t("message.ourServices"),
        managementProductImg: require('../assets/images/pic10.jpg'),
        tradeAndServices: this.$t("message.tradeAndServices"),
        tradeAndServicesPics: [
                require('../assets/images/pic9.jpg'),
                require('../assets/images/pic7.jpg')
        ],
        services3p: this.$t("message.services3p"),
        services3pPic: require('../assets/images/pic6.jpg'),
    }
  }
}
</script>