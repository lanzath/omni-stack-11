const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    // pega o id de autenticação da ong
    const ong_id = req.headers.authorization

    // listagem de casos de uma ong específica  
    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*')

    return res.json(incidents)
  }
}