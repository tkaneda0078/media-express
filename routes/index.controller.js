'use strict'

const express = require('express')
const router = express.Router()
const Article = require('../models/article')
const article = new Article()

/**
 * Top
 */
router.get('/', async (req, res) => {
  await article.setTopicArticle()
  article.setRankingArticleList()
  await article.setNewArticleList()

  res.render('index', await article.getArticleList())
})

/**
 * カテゴリ別記事一覧
 */
router.get('/category/:category', async (req, res) => {
  let data = []

  // カテゴリ記事一覧を設定する
  const category = req.params.category
  await article.setCategoryArticleList(category)

  data['category'] = category
  data['articles'] = await article.getArticleList()

  res.render('list', data)
})

/**
 * 記事詳細
 */
router.get('/article/:id', async (req, res) => {
  // 記事詳細を設定する
  await article.setArticleDetail(req.params.id)
  res.render('detail', await article.getArticleList())
})

module.exports = router