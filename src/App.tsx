import UserCard from './UserCard'
import user from './data/user'
import users from './data/users'

const App = (): JSX.Element => {
  return (
    <>
      <h1>Exercices React</h1>
      <h2>Exercice 1: Passer des props à Usercard</h2>
      <UserCard />
      <h2>Exercice 2: Faite une boucle afin d'afficher une UseCard par utilisateur</h2>
    </>
  )
}

export default App