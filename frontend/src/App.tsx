import './App.css'
import { useFetch } from './hooks/useFetch'

interface Repository {
  full_name: string,
  description: string
}

function App() {
  const base_url = 'https://api.github.com/users/bruno9800/repos'
  const { data: repositories , isFetching} = useFetch<Repository[]>(base_url)

  return (
    <div>
      <h1>First project in linux</h1>

      <ul>
        { isFetching && <p>Carregando...</p>}
        {
          repositories?.map(repo => {
            return(
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
            )
          })
        }
      </ul>
      

    </div>
  )
}

export default App
