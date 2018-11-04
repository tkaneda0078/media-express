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
   * 記事詳細を設定する
   *
   * @param Int id 記事ID
   */
  setArticleDetail (id) {
    // todo: IDを元にデータ取得
    this.data = {
        'img': '/images/sample2.jpg',
        'title': 'article title',
        'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

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