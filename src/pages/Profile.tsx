import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { IProfileInterface } from "../interfaces/Profiles.interface";

const Profile = () => {
    const [profileGithub, setProfileGithub] = useState<IProfileInterface>({
        avatar_url: "", // foto de perfil
        bio: "", // biografía
        followers: 0, // cantidad de seguidores
        following: 0, // cantidad de seguidos
        location: "", // ubicación
        name: "", // nombre completo del usuario
        login: "", // user
        public_repos: 0
    })
    const {user} = useParams();

    useEffect(() =>{
        fetch(`https://api.github.com/users/${user}`)
        .then((res) => res.json())
        .then((data) => {
            setProfileGithub(data)
        })
    }, [user])

    return (
        <div>
            <img src={profileGithub.avatar_url}/>
            <p>{profileGithub.name}</p>
        </div>
    )
}

export default Profile;