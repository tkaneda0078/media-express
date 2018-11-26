'use strict'

const admin = require('../config/firebase/firebase.admin')

class Firebase {

  constructor () {
    this._db = null
    this._setFirestore()
  }

  /**
   * Firestoreオブジェクトを作成する
   *
   * @private
   */
  _setFirestore () {
    this._db = admin.firestore()
    this._db.settings({timestampsInSnapshots: true})
  }


  /**
   * collectionを取得する
   *
   * @param string collection
   * @return object collection ref
   */
  getCollectionRef (collection) {
    return this._db.collection(collection)
  }

}

module.exports = Firebase