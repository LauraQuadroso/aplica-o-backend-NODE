const express = require('express')
const router = express.Router()
const db = require('../db')

// POST /animais
router.post('/', (req, res) => {
  const { nome, idade, especie, porte, vacinas, comportamento, imagem } = req.body

  const sql = `
    INSERT INTO animais (nome, idade, especie, porte, vacinas, comportamento, imagem)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `

  const values = [nome, idade, especie, porte, vacinas, comportamento, imagem]

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Erro ao cadastrar animal' })
    }

    res.status(201).json({ message: 'Animal cadastrado com sucesso!', id: result.insertId })
  })
})

module.exports = router
