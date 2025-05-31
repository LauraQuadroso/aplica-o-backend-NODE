const express = require('express')
const router = express.Router()
const db = require('../db')

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

router.get('/', (req, res) => {
  const { especie, porte, idadeFaixa } = req.query
  let sql = 'SELECT * FROM animais'
  const conditions = []
  const params = []

  if (especie) {
    conditions.push('especie = ?')
    params.push(especie)
  }
  if (porte) {
    conditions.push('porte = ?')
    params.push(porte)
  }
  if (idadeFaixa) {
    if (idadeFaixa === 'filhote') {
      conditions.push('idade >= ? AND idade <= ?')
      params.push(0, 1)
    } else if (idadeFaixa === 'jovem') {
      conditions.push('idade > ? AND idade <= ?')
      params.push(1, 5)
    } else if (idadeFaixa === 'adulto') {
      conditions.push('idade > ?')
      params.push(5)
    }
  }

  if (conditions.length > 0) {
    sql += ' WHERE ' + conditions.join(' AND ')
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Erro ao buscar animais' })
    }
    res.status(200).json(results)
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const sql = 'SELECT * FROM animais WHERE id = ?'

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Erro ao buscar animal por ID' })
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Animal não encontrado' })
    }
    res.status(200).json(results[0])
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { nome, idade, especie, porte, vacinas, comportamento, imagem } = req.body

  const sql = `
    UPDATE animais
    SET nome = ?, idade = ?, especie = ?, porte = ?, vacinas = ?, comportamento = ?, imagem = ?
    WHERE id = ?
  `
  const values = [nome, idade, especie, porte, vacinas, comportamento, imagem, id]

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Erro ao atualizar animal' })
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Animal não encontrado' })
    }
    res.status(200).json({ message: 'Animal atualizado com sucesso!' })
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const sql = 'DELETE FROM animais WHERE id = ?'

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Erro ao deletar animal' })
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Animal não encontrado' })
    }
    res.status(200).json({ message: 'Animal deletado com sucesso!' })
  })
})

module.exports = router
