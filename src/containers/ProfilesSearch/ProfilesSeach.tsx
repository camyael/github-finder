import { IProfilesInterface } from "../../interfaces/Profiles.interface";
import UserResult from "../../components/SearchResult/UserResult";
import { ProfilesSeachDiv } from "./StyledComponent.ProfilesSearch";

interface User {
    users: Array<IProfilesInterface>
}

const ProfilesSearch = ({users}:User) => {
    return (
       <ProfilesSeachDiv>
            {
                users.map(user => <UserResult key={user.id} user={user}/>)
            }
       </ProfilesSeachDiv>
    )
}

export default ProfilesSearch;