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
  await article.setNewArticleList()
  // await article.setCategoryArticleList()
  // await article.setRankingArticleList()

  res.render('index', await article.getArticleList())
})

/**
 * カテゴリ別記事一覧
 */
router.get('/category/:category', async (req, res) => {
  // カテゴリ記事一覧を設定する
  const category = req.params.category
  await article.setCategoryArticleList(category)

  let data = []
  data = await article.getArticleList()
  data['category'] = category

  res.render('list', data)
})

/**
 * 記事詳細
 */
router.get('/article/:id', async (req, res) => {
  await article.setArticleDetail(req.params.id)
  res.render('detail', await article.getArticleList())
})

module.exports = router