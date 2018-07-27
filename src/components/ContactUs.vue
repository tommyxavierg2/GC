<template>
    <div class="text-xs-left">
        <v-container>
            <v-layout row wrap> 
                <v-flex xs12 md9 lg9>
                    <v-container>
                        <h1>{{title}}</h1>
                        <p>{{subTitle}}</p>
                    </v-container>
                    <v-form>
                        <v-container>
                            <v-layout row wrap>
                                <v-flex xs12 sm4 md4 lg4>
                                    <v-text-field background-color="grey lighten-3" :label="$t('message.yourName')" solo></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4 md4 lg4>
                                    <v-text-field background-color="grey lighten-3" :label="$t('message.yourEmail')" solo></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4 md4 lg4>
                                    <v-text-field background-color="grey lighten-3" :label="$t('message.yourPhone')" solo></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4 md12 lg12>
                                    <v-textarea auto-grow background-color="grey lighten-3" :label="$t('message.yourMessage')" solo></v-textarea>
                                </v-flex>
                                <v-btn color="blue darken-1" style="color: white;"> <strong> {{$t("message.sendMessage")}} </strong> </v-btn>
                            </v-layout>
                        </v-container>
                    </v-form>
                </v-flex>
                <v-flex xs12 md3 lg3>
                    <v-container>
                        <h1>{{moreInfo}}</h1>
                    </v-container>
                    <v-card flat mt-4 color="grey lighten-4">
                        <v-layout row wrap v-for="(moreInfoLine, index) in moreInfoLines" :key="index" mt-4>
                            <v-card-text>
                                <v-btn :href="moreInfoLine.href" target="_blank" icon flat >
                                    <v-icon color="blue darken-1" medium icon> {{moreInfoLine.icon}} </v-icon>
                                </v-btn>
                                {{moreInfoLine.text}}  
                            </v-card-text>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template> 
<script>
    export default {
        data() {
            return {
                title: this.$t("message.contactUs"),
                subTitle: this.$t("message.subContact"),
                moreInfo: this.$t("message.moreInfo"),
                moreInfoLines: [
                    { icon: 'location_on', text: '5367 N Hiatus Road, Sunrise Florida 33351', href: "https://www.google.com/maps/place/North+Hiatus+Road,+Plantation,+FL,+EE.+UU./@26.1334538,-80.29958,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9088b68bc8401:0x52d38f691bf513c2!8m2!3d26.133449!4d-80.2973913"},
                    { icon: 'phone', text: '954-533-3379', href: 'tel: 954-533-3379' },
                    { icon: 'email', text: 'info@globaltradee.com', href: 'mailto:info@globaltradee.com' }
                ]
            }
        }
    }
</script>
<style>
    .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot {
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }

</style>
