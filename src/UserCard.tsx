import { User } from "./types/User";

type AvatarProps = {
	image: string;
	alternative: string;
}

const Avatar = (props: AvatarProps): JSX.Element => {
	return (
		<img src={props.image} alt={props.alternative} />
	)
}

type UserCardProps = Omit<User, 'id'>

const UserCard = ({ house, img, name }: UserCardProps): JSX.Element => {
	// const { house, img, name } = props
	// const house = props.house
	// const img = props.img
	// const name = props.name
	return (
		<div className="card">
			<Avatar image={img} alternative={`Profil of ${name} ${house}`} />
			<div>
				<p>Prénom: {name}</p>
				<p>House: {house}</p>
			</div>
		</div>
	)
}

export default UserCard