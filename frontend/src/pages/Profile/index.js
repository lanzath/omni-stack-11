/*
*use effect dispara uma função em determinado momento
*toda vez que é alterado o valor do array de dependência (segundo parametro)
*ele executa a função (primeiro parametro)  
*/

import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function Profile() {
  const [incidents, setIncidents] = useState([])
  const history = useHistory()

  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')

  // function para listagem de casos
  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(res => {
      setIncidents(res.data)
    })
  }, [ongId])

  // function para deletar casos
  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      // busca pelo id no array do componente removido e já o remove da tela
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.clear() // Efetua o logout ao limpar os dados do local storage

    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {/* Iteração de array por map() para listagem de incidents no array */}
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>

            <strong>VALOR</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}