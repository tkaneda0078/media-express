'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express()

app.use(helmet())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(process.env.PORT || 3000, () =>
  console.log('Server connected'))