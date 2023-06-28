import { useEffect, useState } from "react";
import { IProfilesInterface, IProfileInterface } from "../interfaces/Profiles.interface";

interface User {
    user: IProfilesInterface
}

const SearchResult = ({user}:User) => {
    const [profileGithub, setProfileGithub] = useState<IProfileInterface>({
        avatar_url: "", // foto de perfil
        followers: 0, // cantidad de seguidores
        following: 0, // cantidad de seguidos
        name: "", // nombre completo del usuario
        login: "", // user
        public_repos: 0
    })
    const {login} = user

    useEffect(() =>{
        fetch(`https://api.github.com/users/${login}`)
        .then((res) => res.json())
        .then((data) => setProfileGithub(data))
    }, [login])

    return (
        <div>
            <img src={profileGithub.avatar_url}/>
            <div>
                <a href={`/${profileGithub.login}`}><p>{profileGithub.name}</p></a>
                <a href={`/${profileGithub.login}`}><p>{profileGithub.login}</p></a>
            </div>
            <p>{profileGithub.bio}</p>
            <div>
                <p>{profileGithub.location}</p>
                <p>{profileGithub.public_repos} repositorios</p>
                <p>{profileGithub.followers} seguidores</p>
            </div>
        </div>
    )
}

export default SearchResult;