import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

export interface Repository {
  full_name: string,
  description: string
}

export function Repos() {
  const base_url = 'https://api.github.com/users/bruno9800/repos'
  // const { data: repositories , isFetching} = useFetch<Repository[]>(base_url)
  // ** Substituindo por useQuery
  const {data:repositories, isFetching} = useQuery('repos', async () => {
    const response = await axios.get(base_url)
    
    return response.data
  }, {
    staleTime: 1000 * 60, // 1 minute
  })

  return (
    <div>
      <h1>First project in linux</h1>

      <ul>
        { isFetching && <p>Carregando...</p>}
        {
          repositories?.map((repo:Repository )=> (
              <li key={repo.full_name}>
                  <Link to={`repos/${repo.full_name}`}>{repo.full_name}</Link>
                  <p>{repo.description}</p>
              </li>
          ))
        }
      </ul> 
    </div>
  )
}