import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'
import ReFetch from './components/ReFetch'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getTours = async () => {
    setIsLoading(true)
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
  useEffect(() => {
    getTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours([...newTours])
  }

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
      {!!tours.length ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <ReFetch reFetch={getTours} />
      )}
    </main>
  )
}
export default App
