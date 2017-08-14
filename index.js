const express = require('express')
const app = express()

app.get('/reload', (req, res) => {
  res.send('success')
})

app.listen(3000, () => {
  console.log('Live reloader listening on port 3000!')
})
