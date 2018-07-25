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
                                    <v-text-field background-color="grey lighten-3" label="Your name" solo></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4 md4 lg4>
                                    <v-text-field background-color="grey lighten-3" label="Your email" solo></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4 md4 lg4>
                                    <v-text-field background-color="grey lighten-3" label="Your phone" solo></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4 md12 lg12>
                                    <v-textarea auto-grow background-color="grey lighten-3" label="Your message" solo></v-textarea>
                                </v-flex>
                                <v-btn color="blue darken-1" style="color: white;"> <strong> Send Message </strong> </v-btn>
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
                                <v-btn :href="moreInfoLine.href" icon flat >
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
                title: 'Contact Us',
                subTitle: 'If you have any question in how we can help your business, contact us directly by filling the following form.',
                moreInfo: 'More Info',
                moreInfoLines: [
                    { icon: 'location_on', text: '5367 N Hiatus Road, Sunrise Florida 33351', href: ""},
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
