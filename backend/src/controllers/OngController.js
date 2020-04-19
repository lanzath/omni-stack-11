const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*') //[ongs]

    return res.json(ongs)
  },

  async create(req, res) {
    // pegando dados do corpo da requisição
    const { name, email, whatsapp, city, uf } = req.body

    // criação de id hexadecimal de 4 bytes de caracteres
    const id = crypto.randomBytes(4).toString('HEX')

    // inserção de dados no db
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    // devolve o id
    return res.json({ id })
  }
}