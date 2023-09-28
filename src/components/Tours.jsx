import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <h2 className='text title'>Our Tours</h2>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours
