'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
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