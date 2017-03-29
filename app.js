const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const family = require('./routes/family.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/family', family)


app.listen(PORT, function() {
  console.log(`listening on port # ${PORT} on day 5`)
})
