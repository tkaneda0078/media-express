'use strict'

const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get('/', (req, res) => {
  const article = new Article()

  article.setTopicArticle()
  article.setRankingArticles()
  article.setNewArticles()
  article.setAllCategoryArticles()

  res.render('index', article.getArticles())
})

router.get('/category/:category', (req, res) => {
  const article = new Article()
  let data = {}
  let category = req.params.category

  // 特定のカテゴリ記事を設定する
  article.setCategoryArticles(category)

  data['category'] = category
  data['articles'] = article.getArticles()

  res.render('list', data)
})

router.get('/article/:id', (req, res) => {
  const article = new Article()

  let articleId = req.params.id
  data['articleId'] = articleId

  // let article = {
  //   'img'    : '/images/sample2.jpg',
  //   'title'  : 'article title'
  // }

  res.render('detail', article.getArticles())
})

module.exports = router