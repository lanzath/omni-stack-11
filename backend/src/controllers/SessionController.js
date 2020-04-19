const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    // pega id no corpo da req
    const { id } = req.body

    // busca ong no database
    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first()

    // mensagem caso não encontre a ong
    if (!ong) return res.status(400).json({ error: 'No Ong found with this id' })

    return res.json(ong)
  }
}