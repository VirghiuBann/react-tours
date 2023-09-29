const ReFetch = ({ reFetch }) => {
  return (
    <section className='title'>
      <h2>No Tours left</h2>
      <button className='btn' onClick={() => reFetch()}>
        Re-fetch
      </button>
    </section>
  )
}

export default ReFetch
