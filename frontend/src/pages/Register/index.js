import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi' // Login Feather Icon

import api from '../../services/api'
import './styles.css' // Css 

// Images
import logoImg from '../../assets/logo.svg'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  // função responsável pelo cadastro do usuário no backend
  async function handleRegister(e) {
    e.preventDefault() // previne comportamento padrão do form de recarregar a página

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const res = await api.post('ongs', data) // chama a api e manda os dados para o endpoint data

      alert(`Seu ID de acesso: ${res.data.id}`)

      history.push('/') // Manda para rota login após concluir o cadastro
    } catch (error) {
      alert('Erro no cadastro, tente novamente.')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />  {/* arrow left icon component */}
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)} // No evento atribui o value para a variável name no estado
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }} /* React style */
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}