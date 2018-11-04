'use strict'

class Article {

  constructor () {
    this.data = {}
  }

  /**
   * 記事を取得する
   */
  getArticles () {
    return this.data
  }

  /**
   * トピック記事を設定する
   *
   * todo: DBからデータ取得
   */
  setTopicArticle () {
    this.data['topicArticle'] = {
      'img': '/images/sample2.jpg',
      'summary': 'sample topic'
    }
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
   * 最新の記事を設定する
   *
   * todo: DBからデータ取得
   */
  setNewArticles () {
    this.data['newArticles'] = [
      {
        'img'    : '/images/sample2.jpg',
        'summary': 'sample new summay1'
      },
      {
        'img'    : '/images/sample.jpg',
        'summary': 'sample nwe summay2'
      },
      {
        'img'    : '/images/sample.jpg',
        'summary': 'sample new summay3'
      },
      {
        'img'    : '/images/sample4.jpg',
        'summary': 'sample new summay4'
      },
      {
        'img'    : '/images/sample4.jpg',
        'summary': 'sample new summay5'
      },
      {
        'img'    : '/images/sample2.jpg',
        'summary': 'sample new summay6'
      },
      {
        'img'    : '/images/sample4.jpg',
        'summary': 'sample new summay7'
      },
      {
        'img'    : '/images/sample3.jpg',
        'summary': 'sample new summay8'
      }
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
   * 特定のカテゴリ記事を設定する
   *
   * @param String category
   */
  setCategoryArticles (category) {
    // todo: categoryを元にデータ取得
    this.data = [
      {
        'img': '/images/sample2.jpg',
        'summary': 'sample category summay1'
      },
      {
        'img': '/images/sample.jpg',
        'summary': 'sample category summay2'
      },
      {
        'img': '/images/sample4.jpg',
        'summary': 'sample category summay3'
      }
    ]
  }

}

module.exports = Article