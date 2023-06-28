import { useState } from 'react'
import { IProfilesInterface } from '../interfaces/Profiles.interface';
import ProfileSearch from '../containers/ProfileSeach';

const Searcher = () => {
    const [userSearch, setUserSearch] = useState<string>("")
    const [profiles, setProfiles] = useState<Array<IProfilesInterface>>([])
    const [totalCount, setTotalCount] = useState<number>(0)

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        fetch(`https://api.github.com/search/users?q=${userSearch}`)
        .then((res) => res.json())
        .then((data) => {
            setTotalCount(data.total_count)
            setProfiles(data.items)
        })
    }

    return (
        <div>
            <h1>Github Search</h1>
            <input value={userSearch} onChange={e => setUserSearch(e.target.value)} placeholder='Usuario de github...'/>
            <button onClick={e => handleSubmit(e)} type="submit">Buscar</button>
            {totalCount > 0 && <span>{totalCount} resultados</span>}
            <ProfileSearch users={profiles}/>
        </div>
    )
}

export default Searcher;