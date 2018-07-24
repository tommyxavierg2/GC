<template>
    <div class="gc-align-center">
        <h1>{{title}}</h1>
        <v-container>
            <v-layout pb-4>
                <v-container>
                    <v-flex xs12 md8 lg8>
                        <p class="text-sm-left"> <strong> Management of products and equipment on an international level: </strong> To be the number one intermediary agent in managing products and equipment requested by customers with manufacturers and / or distributors on an international level, offering a better option when it comes to competitive prices of the products requested.</p>
                    </v-flex>
                    <v-flex xs12 md4 lg4>
                        <v-card>
                            <v-card-media></v-card-media>
                        </v-card>
                    </v-flex>
                </v-container>
            </v-layout>
            <v-layout pb-4>
                <v-container class="text-sm-left">
                    <h4>Trade and logistic services</h4>
                    <v-flex xs12 md8 lg8 pt-1>
                        <ul>
                            <li v-for="(service, index) in tradeAndServices" :key="index" class="text-sm-left"> {{service}} </li>
                        </ul>
                    </v-flex>
                    <v-flex xs12 md4 lg4 v-for="(pic, index) in tradeAndServicesPics" :key="index">
                        <v-card>
                            <v-card-media :src="pic"></v-card-media>
                        </v-card>
                    </v-flex>
                </v-container>
            </v-layout>
            <v-layout pb-4>
                <v-container class="text-sm-left">
                    <h4>Sevicios 3PL (third-party logistics):</h4>
                    <v-flex xs12 md8 lg8 pt-1>
                        <ul>
                            <li v-for="(service, index) in services3p" :key="index"> {{service}} </li>
                        </ul>
                    </v-flex>
                    <v-flex xs12 md4 lg4>
                        <v-card>
                            <v-card-media :src="services3pPic"></v-card-media>
                        </v-card>
                    </v-flex>
                </v-container>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Our Services',
        tradeAndServices: [
            'Perform the coordination of logistics in the mobilization of goods in the import and export according to the needs of the customer.',
            'Preparation of all necessary information for export documents',
            'Export Quotes',
            'Air shipments (direct and consolidated)',
            'Maritime Shipping (By container or LCL)',
            'Door to door transportation services.',
            'Pick-up and delivery services',
            'Shipment tracking report',
            'Contracting of cargo',
            'Negotiation of shipment prices',
        ],
        tradeAndServicesPics: [
                require('../assets/images/pic1.jpg'),
                require('../assets/images/pic1.jpg')
        ],
        services3p: [
            'Outsourced logistics services to client companies for part or all of their supply chain management functions.',
            'Consolidation of merchandise',
            'Fulfillment'
        ],
        services3pPic: require('../assets/images/pic1.jpg'),
    }
  }
}
</script>