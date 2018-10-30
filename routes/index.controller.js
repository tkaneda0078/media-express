'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // todo modelで取得する
  let data = {}

  let topic = {
    'img'    : '/images/sample3.jpg',
    'summary': 'sample summay'
  }

  data['topic'] = topic

  let rankingArticles = [
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
    },
    {
      'img'    : '/images/sample3.jpg',
      'summary': 'sample new summay9'
    },
    {
      'img'    : '/images/sample3.jpg',
      'summary': 'sample new summay10'
    },
  ]

  data['rankingArticles'] = rankingArticles

  let newArticles = [
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
    },
  ]

  data['newArticles'] = newArticles

  let categoryArticles = [
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
    },
  ]

  data['categoryArticles'] = categoryArticles

  res.render('index', data)
})

router.get('/category/:category', (req, res) => {
  // todo カテゴリ別にmodelでデータ取得する
  let data = {}

  let category = req.params.category
  data['category'] = category

  let articles = [
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
    },
  ]

  data['articles'] = articles

  res.render('list', data)
})

router.get('/article/:id', (req, res) => {
  // todo カテゴリ別にmodelでデータ取得する
  let data = {}

  let articleId = req.params.id
  data['articleId'] = articleId

  let article = {
    'img'    : '/images/sample2.jpg',
    'title'  : 'article title'
  }

  data['article'] = article

  res.render('detail', data)
})

module.exports = router