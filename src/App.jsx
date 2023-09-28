import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getTours = async () => {
      try {
        const resp = await fetch(url)

        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }

        const result = await resp.json()
        setTours(result)
      } catch (error) {
        setIsError(true)
        console.error(error)
      }
      setIsLoading(false)
    }
    getTours()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return (
      <div>
        <h5>There was an error...</h5>
      </div>
    )
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  )
}
export default App
