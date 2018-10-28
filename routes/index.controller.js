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

module.exports = router