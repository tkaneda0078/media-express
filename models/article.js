'use strict'

const firebase = require('./firebase')

class Article extends firebase {

  constructor () {
    super()
    this.data = []
    this.initCollectionRef('articles')
  }


  /**
   * 記事を取得する
   */
  async getArticleList () {
    return this.data
  }

  /**
   * 最新の記事一覧を設定する
   *
   */
  async setNewArticles () {
    this.data['newArticles'] = await this.getNewArticles()
  }

  /**
   * 最新の記事一覧を取得する
   *
   * @returns array articles
   */
  async getNewArticles () {
    const docRef = this.collectionRef
      .orderBy('createdAt', 'desc')
      .limit(10)

    let articles = []
    await docRef.get()
      .then(docs => {
        docs.forEach(doc => {
          const data = doc.data()
          articles.push({
            id:       data.id,
            title:    data.title,
            imageUrl: data.imageUrls[0]
          })
        })
      })
      .catch(err => {
        console.log('Error getting documents', err)
      })

    return articles
  }

  /**
   * トピック記事を設定する
   *
   */
  async setTopicArticle () {
    this.data['topic'] = await this.getTopicArticle()
  }

  /**
   * 最新のトピック記事を取得する
   *
   * todo: エラーハンドリング、カラム指定できる場合必要な情報のみ取得
   */
  async getTopicArticle () {
    const docRef = this.collectionRef
      .orderBy('createdAt', 'desc')
      .limit(1)

    let article = {}
    await docRef.get()
      .then(doc => {
        const data = doc.docs[0].data()
        article = {
          id:       data.id,
          title:    data.title,
          imageUrl: data.imageUrls[0]
        }
      })
      .catch(err => {
        console.log('Error getting documents', err)
      })

    return article
  }

  /**
   * 記事詳細を設定する
   *
   * @param Int id 記事ID
   */
  async setArticleDetail (id) {
    this.data = await this.getArticleDetail(id)
  }

  /**
   * 記事詳細を設定する
   *
   * @param Int id 記事ID
   */
  async getArticleDetail (id) {
    const docRef = this.collectionRef.doc(id)

    let article = {}
    await docRef.get()
      .then(doc => {
        article = doc.data()
        article.id = data.id
      })
      .catch(err => {
        console.log('Error getting documents', err)
      })

    return article
  }

  /**
   * ランキング記事を設定する
   *
   * todo: DBからデータ取得
   */
  setRankingArticles () {
    this.data['rankingArticles'] = [
      {
        'img': '/images/sample2.jpg',
        'summary': 'sample new summay1'
      },
      {
        'img': '/images/sample.jpg',
        'summary': 'sample nwe summay2'
      },
      {
        'img': '/images/sample.jpg',
        'summary': 'sample new summay3'
      },
      {
        'img': '/images/sample4.jpg',
        'summary': 'sample new summay4'
      },
      {
        'img': '/images/sample4.jpg',
        'summary': 'sample new summay5'
      },
      {
        'img': '/images/sample2.jpg',
        'summary': 'sample new summay6'
      },
      {
        'img': '/images/sample4.jpg',
        'summary': 'sample new summay7'
      },
      {
        'img': '/images/sample3.jpg',
        'summary': 'sample new summay8'
      },
      {
        'img': '/images/sample3.jpg',
        'summary': 'sample new summay9'
      },
      {
        'img': '/images/sample3.jpg',
        'summary': 'sample new summay10'
      },
    ]
  }

  /**
   * 全カテゴリの記事を設定する
   *
   * todo: DBからデータ取得
   */
  setAllCategoryArticles () {
    this.data['categoryArticles'] = {
      'category1': [
        {
          'img'    : '/images/sample2.jpg',
          'summary': 'sample category summay1'
        },
        {
          'img'    : '/images/sample.jpg',
          'summary': 'sample category summay2'
        },
        {
          'img'    : '/images/sample4.jpg',
          'summary': 'sample category summay3'
        }
      ],
      'category2': [
        {
          'img'    : '/images/sample2.jpg',
          'summary': 'sample category summay1'
        },
        {
          'img'    : '/images/sample.jpg',
          'summary': 'sample category summay2'
        },
        {
          'img'    : '/images/sample4.jpg',
          'summary': 'sample category summay3'
        }
      ],
    }
  }

  /**
   * カテゴリ別記事一覧を設定する
   *
   * @param String category
   */
  async setCategoryArticles (category) {
    this.data = await this.getCategoryArticles(category)
  }

  /**
   * カテゴリ別記事一覧を取得する
   *
   * @param String category
   * @returns array articles
   */
  async getCategoryArticles (category) {
    const docRef = this.collectionRef
      .where('category', '==', category)

    let articles = []
    await docRef.get()
      .then(docs => {
        docs.forEach(doc => {
          const data = doc.data()
          articles.push({
            id:       data.id,
            title:    data.title,
            imageUrl: data.imageUrls[0]
          })
        })
      })
      .catch(err => {
        console.log('Error getting documents', err)
      })

    return articles
  }

}

module.exports = Article