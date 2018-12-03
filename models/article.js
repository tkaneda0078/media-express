'use strict'

const firebase = require('./firebase')

/**
 * Article class
 *
 * todo: エラーハンドリング、ログ出力
 */
class Article extends firebase {

  constructor () {
    super()
    this._data = []
    this._articleRef = this.getCollectionRef('articles')
  }

  /**
   * 記事を取得する
   */
  async getArticleList () {
    return this._data
  }

  /**
   * 最新の記事一覧を設定する
   *
   * todo: DBのimageUrlを見直し
   */
  async setNewArticleList () {
    let articleList = []
    await this._articleRef
      .orderBy('createdAt', 'desc')
      .limit(10)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          const data = doc.data()
          articleList.push({
            id:       data.id,
            title:    data.title,
            imageUrl: data.imageUrls[0]
          })

          this._data['newArticleList'] = articleList
        })
      })
      .catch(err => {
        console.log('Error getting documents', err)
      })
  }

  /**
   * トピック記事を設定する
   *
   * todo: DBのimageUrlを見直し
   */
  async setTopicArticle () {
    await this._articleRef
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get()
      .then(doc => {
        const data = doc.docs[0].data()
        this._data['topic'] = {
          id:       data.id,
          title:    data.title,
          imageUrl: data.imageUrls[0]
        }
      })
      .catch(err => {
        console.log('Error getting documents', err)
      })
  }

  /**
   * 記事詳細を設定する
   *
   * @param Int id 記事ID
   */
  async setArticleDetail (id) {
    await this._articleRef
      .doc(id)
      .get()
      .then(doc => {
        this._data = doc.data()
      })
      .catch(err => {
        console.log('Error getting documents', err)
      })
  }

  /**
   * カテゴリ記事一覧を設定する
   *
   * @param String category
   */
  async setCategoryArticleList (category) {
    this._data['categoryArticleList'] = await this._getArticleListByCategory(category)
  }

  /**
   * カテゴリ記事一覧を取得する
   *
   * @private
   * @param String category
   * @returns array articles
   */
  async _getArticleListByCategory (category) {
    let articleList = []
    await this._articleRef
      .where('category', '==', category)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          const data = doc.data()
          articleList.push({
            id:       data.id,
            title:    data.title,
            imageUrl: data.imageUrls[0]
          })
        })
      })
      .catch(err => {
        console.log('Error getting documents', err)
      })

    return articleList
  }

}

module.exports = Article