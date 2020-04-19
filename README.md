# Projeto Be The Hero
## Projeto fullstack elaborado durante a semana OmniStack 11 da [Rocketseat](https://rocketseat.com.br/)

## Os arquivos estão todos estruturados por pastas conforme as aulas, e os códigos comentados

### Front-End:
**O front-end do projeto foi criado com React, segue algumas anotações que eu fiz durante as aulas**

1. JSX: o React utiliza o formato `jsx` que é um arquivo `html` dentro de um `javascript`;
2. Componentes: Componentes são funções que retornam um `HTML`;
3. SPA: O React utiliza o conceito SPA (Single Page Application) que para isto, utiliza lives reload para não ter que carregar a página inteira e fazer a atualização de modo automático;
4. Props: As `props`(properties) são parâmetros de uma `function`que recebem conteúdos externos das propriedades dos elementos;
5. Estado: React utiliza o conceido de `estado` que é uma informação a ser mantida (armazenada) pelo `componente`;
6. Imutabilidade: O react é `imutável`, quando o estado é alterado (sobrepondo o valor do mesmo), o `componente` é **remontado** para ser renderizado novamente;
7. useState: O `useState`retorna um array, onde o primeiro parâmetro é um `valor` e o segundo é uma `function` `[valor, () => {...}]`;
8. `e.preventDefault()` é utilizado para impedir o comportamento padrão de atualizar toda a página num formulário;
9. `useHistory()` é importado do `react-router-dom` para direcionar o usuário através das rotas quando não se é possível utilizar links;
10. `useEffetct` é utilizado para disparar uma function num determinado momento toda vez que for alterado o valor do array de dependências ex.: `useEffect(() => {...}, [...])`;

### Back-end:
**O back-end do projeto foi criado com node.js uma plataforma criada com o google v8 engine para desenvolvimento server-side com `javascript`, os frameworks utilizados foram `express` para utilização de rotas e middlewares, `knex` para conexão e integração com banco de dados e `sqlite3` como banco de dados e `cors`como módulo de segurança para definir quem pode acessar a API**

**Segue minhas anotações** 
1. MÉTODOS **HTTP**
   1. `GET`:    Buscar uma informação no back-end
   1. `POST`:   Criar uma informação no back-end
   1. `PUT`:    Alterar uma informação no back-end
   1. `DELETE`: Deletar uma informação no back-end
2. Tipos de **parâmetros**
   1. `query params`: parâmetros nomeados enviados na rota após '?' servem para filtros e paginação
   1. `route params`: parâmetros para identificar recursos na rota após ':'
   1. `request body`: corpo da requisição, utilizado para criar e alterar recursos

