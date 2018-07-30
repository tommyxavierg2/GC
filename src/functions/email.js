 // 1. Deploys as dbUsersOnUpdate
 const functions = require('firebase-functions')
 const nodemailer = require('nodemailer')
 const postmarkTransport = require('nodemailer-postmark-transport')
 const admin = require('firebase-admin')

 // 2. Admin SDK can only be initialized once
 try {
   admin.initializeApp(functions.config().firebase)
 } catch (e) {
   console.log('dbCompaniesOnUpdate initializeApp failure')
 }

 // 3. Google Cloud environment variable used:
 // firebase functions:config:set postmark.key="API-KEY-HERE"
 const postmarkKey = functions.config().postmark.key
 const mailTransport = nodemailer.createTransport(postmarkTransport({
   auth: {
     apiKey: postmarkKey
   }
 }))

 function sendEmail(email) {
   // 5. Send welcome email to new users
   const mailOptions = {
     from: '"Tommy" <tommyxavierg@gmail.com>',
     to: '${email}',
     subject: 'Welcome!',
     html: `<Testing email system with firebase cloud>`
   }
   // 6. Process the sending of this email via nodemailer
   return mailTransport.sendMail(mailOptions)
     .then(() => console.log('dbCompaniesOnUpdate:Welcome confirmation email'))
     .catch((error) => console.error('There was an error while sending the email:', error))
 }