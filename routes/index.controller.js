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
router.get('/category/:category', async (req, res) => {
  const article = new Article()
  let data = []

  // カテゴリ別記事一覧を設定する
  const category = req.params.category
  await article.setCategoryArticles(category)

  data['category'] = category
  data['articles'] = await article.getArticleList()

  res.render('list', data)
})

/**
 * 記事詳細
 */
router.get('/article/:id', async (req, res) => {
  const article = new Article()

  // 記事詳細を設定する
  await article.setArticleDetail(req.params.id)

  res.render('detail', await article.getArticleList())
})

module.exports = router