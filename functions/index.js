const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);


exports.sendEmail = functions.firestore
    .document("emails/{emailId}")
    .onCreate(event => {

        const user = event.data();

        const msg = {
            to: 'tommyxavierg@gmail.com',
            from: user.email,
            subject: 'Contact request',
            templateId: 'facbb22d-e9c0-41d0-990f-c37651744c87',
            substitutionWrappers: ['{{', '}}'],
            substitutions: {
                name: user.name,
                phone: user.phone,
                email: user.email,
                message: user.message
            }
        };

        console.log(msg)
        return sgMail.send(msg)
    })
