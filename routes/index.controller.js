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

router.get('/category/:type', (req, res) => {
  let type = req.params.type
  res.render('list')
})

router.get('/article/:id', (req, res) => {
  let id = req.params.id
  res.render('detail')
})

module.exports = router