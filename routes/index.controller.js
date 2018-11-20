'use strict'

const express = require('express')
const router = express.Router()
const Article = require('../models/article')

/**
 * Top
 */
router.get('/', async (req, res) => {
  const article = new Article()

  await article.setTopicArticle()
  article.setRankingArticles()
  article.setNewArticles()
  article.setAllCategoryArticles()

  res.render('index', await article.getArticleList())
})

/**
 * カテゴリ別記事一覧
 */
router.get('/category/:category', (req, res) => {
  const article = new Article()
  let data = []
  let category = req.params.category

  // 特定のカテゴリ記事を設定する
  article.setCategoryArticles(category)

  data['category'] = category
  data['articles'] = article.getArticleList()

  res.render('list', data)
})

/**
 * 記事詳細
 */
router.get('/article/:id', (req, res) => {
  const article = new Article()
  let data = []
  let articleId = req.params.id

  // 記事詳細を設定する
  article.setArticleDetail(articleId)

  data['articleId'] = articleId
  data['article'] = article.getArticleList()

  res.render('detail', data)
})

module.exports = router