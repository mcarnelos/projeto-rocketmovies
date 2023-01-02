import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>

      
      <h1>RocketMovies</h1>

      <input type="text" placeholder='Pesquisar pelo título'/>
      <Profile>
        <div>
          <strong>Murilo Carnelós</strong>
          <button>sair</button>
        </div>

        <img
          src="https://github.com/mcarnelos.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  )
}