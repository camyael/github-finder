export interface IProfilesInterface {
    avatar_url: string,
    events_url: string,
    followers_url: string,
    following_url: string,
    html_url: string,
    login: string,
    repos_url: string,
    id: number,
    node_id: string,
    gravatar_id: string,
    url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    score?: number
}

export interface IProfileInterface {
    avatar_url: string, // foto de perfil
    bio?: string, // biografía del usuario
    followers: number, // cantidad de seguidores
    following: number, // cantidad de seguidos
    location?: string, // ubicación del usuario
    name: string, // nombre completo del usuario
    login: string, // user
    public_repos: number // repositorios publicos del usuario
    twitter_username?: string | null;
    blog?: "";
}