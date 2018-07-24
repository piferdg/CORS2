const express = require('express')
const cors = require('cors')
const data = require('./dataSet')
const port = parseInt(process.env.PORT || 8000)

const app = express()
app.use(cors())

function name(params) {
  
}