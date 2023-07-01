import { useState } from 'react'
import { IProfilesInterface } from '../../interfaces/Profiles.interface';
import ProfilesSearch from '../../containers/ProfilesSearch/ProfilesSeach';
import { SearcherDiv, SearcherTitle, SearcherInput, SearcherResults } from './StyledComponent.Searcher';

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
        <SearcherDiv>
            <SearcherTitle>Encuentra un perfil de Github</SearcherTitle>
            <SearcherInput>
                <input className='searcherInput' value={userSearch} onChange={e => setUserSearch(e.target.value)} placeholder='Buscar por usuario o nombre'/>
                <button className='searcherButton' onClick={e => handleSubmit(e)} type="submit">Buscar</button>
            </SearcherInput>
            {totalCount > 0 && <SearcherResults>{totalCount} resultados</SearcherResults>}
            <ProfilesSearch users={profiles}/>
        </SearcherDiv>
    )
}

export default Searcher;