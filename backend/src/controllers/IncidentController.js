const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    // contagem de casos count[0]
    const [count] = await connection('incidents').count()

    // lista todos os casos e limita a 5 casos por página
    // relaciona (join()) o caso com a ong que o postou pelo ong_id 
    const { page = 1 } = req.query
    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ])

    // mostra a contagem no x-total-count do cabeçalho da resposta http
    res.header('X-Total-Count', count['count(*)'])

    return res.json(incidents)
  },

  async create(req, res) {
    // pega dados do corpo da requisição
    const { title, description, value } = req.body

    // pega id de qual ong está enviando o incidente do cabeçalho da requisição
    const ong_id = req.headers.authorization

    // armazena os dados da primeira posição do array no id
    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return res.json({ id })
  },

  async delete(req, res) {
    // pega o id do route params (:id)
    const { id } = req.params

    // pega o id da ong que criou o caso
    const ong_id = req.headers.authorization

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    // verificação se a ong que está deletando é a mesma que postou o caso
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' })
    }

    // deleta caso do db
    await connection('incidents').where('id', id).delete()

    // resposta para sucesso na operação porém não há conteúdo para exibir
    return res.status(204).send()
  }
}