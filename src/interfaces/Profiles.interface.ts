interface ProfilesInterface {
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

export default ProfilesInterface;


// avatar_url: "https://avatars.githubusercontent.com/u/14726?v=4"
// events_url : "https://api.github.com/users/seba/events{/privacy}"
// followers_url : "https://api.github.com/users/seba/followers"
// following_url : "https://api.github.com/users/seba/following{/other_user}"
// html_url : "https://github.com/seba"
// login : "seba"
// repos_url: "https://api.github.com/users/seba/repos"