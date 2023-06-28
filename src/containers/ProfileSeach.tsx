import { IProfilesInterface } from "../interfaces/Profiles.interface";
import SearchResult from "../components/SearchResult";

interface User {
    users: Array<IProfilesInterface>
}

const ProfileSearch = ({users}:User) => {
    return (
       <div>
            {
                users.map(user => <SearchResult key={user.id} user={user}/>)
            }
       </div>
    )
}

export default ProfileSearch;