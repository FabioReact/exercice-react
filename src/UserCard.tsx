type AvatarProps = {

}

const Avatar = (props: AvatarProps): JSX.Element => {
	return (
		<img src="" alt="Profil of" />
	)
}

type UserCardProps = {

}

const UserCard = (props: UserCardProps): JSX.Element => {
	return (
		<div className="card">
			<Avatar />
			<div>
				<p>Prénom: </p>
				<p>House: </p>
			</div>
		</div>
	)
}

export default UserCard