'use strict'

const admin = require('firebase-admin');
const serviceAccount = require('./firebase.key');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;