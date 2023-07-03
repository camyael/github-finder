import { useEffect, useState } from "react";
import { IProfilesInterface, IProfileInterface } from "../../interfaces/Profiles.interface";
import { ProfileResult,
    ProfileResultImg,
    ProfileResultInfo,
    ProfileResultInfoRepos,
    ProfileResultInfoUser,
    ProfileButton } from "./StyledComponent.SearchResult";
import Profile from "../Profile/Profile";

interface User {
    user: IProfilesInterface
}

const UserResult = ({user}:User) => {
    const [profileView, setProfileView] = useState<boolean>(false)
    const [profileGithub, setProfileGithub] = useState<IProfileInterface>({
        avatar_url: "", // foto de perfil
        followers: 0, // cantidad de seguidores
        following: 0, // cantidad de seguidos
        name: "", // nombre completo del usuario
        login: "", // user
        public_repos: 0
    })
    const {login} = user;

    useEffect(() =>{
        fetch(`https://api.github.com/users/${login}`)
        .then((res) => res.json())
        .then((data) => {setProfileGithub(data)})
    }, [login])

    return (
        <ProfileResult>
            <ProfileResultImg>
                <img src={user.avatar_url}/>
            </ProfileResultImg>
            <ProfileResultInfo>
                <ProfileResultInfoUser>
                    <p className="profileName">{profileGithub.name}</p>
                    <p className="profileUser">{user.login}</p>
                </ProfileResultInfoUser>
                <p className="profileBio">{profileGithub.bio}</p>
                <ProfileResultInfoRepos>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"/>
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        </svg>
                        <p>{profileGithub.public_repos} repositorios</p>
                    </div>
                    <ProfileButton onClick={() => setProfileView(!profileView)}>Ver perfil</ProfileButton>
                </ProfileResultInfoRepos>
            </ProfileResultInfo>
            {profileView && <Profile profile={profileGithub} setProfileView={setProfileView}/>}
        </ProfileResult>
    )
}

export default UserResult;