import ProfilesInterface from "../interfaces/Profiles.interface";
import Profile from "../components/Profile";

interface User {
    users: Array<ProfilesInterface>
}

const ProfileSearch = ({users}:User) => {
    return (
       <div>
            {
                users.map(user => <Profile key={user.id} user={user}/>)
            }
       </div>
    )
}

export default ProfileSearch;