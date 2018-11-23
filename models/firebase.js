'use strict'

const admin = require('../config/firebase/firebase.admin')

class Firebase {

  constructor () {
    this.db = admin.firestore()
    this.db.settings({timestampsInSnapshots: true})
    this.collectionRef
  }

  /**
   * init collection ref
   *
   * @param string collection
   * @returns {Promise<void>}
   */
  initCollectionRef (collection) {
    this.collectionRef = this.db.collection(collection)
  }

}

module.exports = Firebase