import React from 'react';
import Routes from './routes'

import './global.css'



// JSX (arquivo html dentro de um js) -> javascript XML
// Um componente é uma função que retorna um html
// lives reload, att automática de página

// props são parâmetros de uma função que recebem conteúdos externos 
// das propriedades dos elementos
// props.children recebe o valor dos elementos html
// A desestruturação é util para determinar quais propriedades serão usadas

// Estado é uma informação que será mantida pelo componente (armazenada)
// Estado é uma variável que quando alterada remonta o componente para ele renderizar novamente
// O react é imutável, não permitindo alterar o estado diretamente, deve-se sobrepor o valor

// useState retorna um array [valor, função de atualização]

function App() {
  return (
    <Routes />
  );
}

export default App;
