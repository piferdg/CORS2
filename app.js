const express = require('express')
const cors = require('cors')
const data = require('./data')
const port = parseInt(process.env.PORT || 8000)

const app = express()
app.use(cors())

function instructorID(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

app.get('/', (request, response) => {
  response.json({ data })
})

app.get('/:id', (request, response) => {
  let instructor = instructorID(data, request.params.id)
  
  if (!instructor) {
    response.status(404).json({
      error: {
        message: 'No record found!'
      }
    })
  } else {
    response.json({
      data: instructor
    })
  }
})

app.listen(port, () =>
  console.log('listening on port', port))