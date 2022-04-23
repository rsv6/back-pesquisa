import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post('/pesquisa/acesso', (req, res) => {
  const cliente = req.body
  console.log("Rota: /pesquisa/acesso: ", cliente)

  return res.status(200).json(1)
})

app.post('/pesquisa/notificacao', (req, res) => {
  const { notificacao } = req.body
  console.log("Rota: /pesquisa/notificacao: ", notificacao)

  return res.status(200).json(notificacao)
})

app.post('/pesquisa/nota', (req, res) => {
  const cliente = req.body
  console.log("Rota: /pesquisa/nota: ", cliente)
  
  return res.status(200).json(cliente)
})

app.listen(8080, console.log('Server running on port 8080'))