const express = require('express')
const cors = require('cors')
const app = express()
const animaisRoutes = require('./routes/animal')

app.use(cors())
app.use(express.json())

app.use('/animais', animaisRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})