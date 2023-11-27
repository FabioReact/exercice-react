import UserCard from "./UserCard";
import user from "./data/user";
import users from "./data/users";
import { User } from "./types/User";

const App = (): React.ReactElement => {
  return (
    <>
      <h1>Exercices React</h1>
      <h2>Exercice 1: Passer des props à Usercard</h2>
      <UserCard name={user.name} house={user.house} img={user.img} />
      <h2>
        Exercice 2: Faite une boucle afin d'afficher une UseCard par utilisateur
      </h2>
      {users.map(({ name, house, img, id }: User) => (
        <UserCard key={id} name={name} house={house} img={img} />
      ))}
    </>
  );
};

export default App;
