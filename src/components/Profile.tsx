import ProfilesInterface from "../interfaces/Profiles.interface";

interface User {
    user: ProfilesInterface
}

const Profile = ({user}:User) => {
    return (
        <div>
            <img src={user.avatar_url}/>
            <p>{user.login}</p>
        </div>
    )
}

export default Profile;