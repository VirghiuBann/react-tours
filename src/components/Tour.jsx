import { useState } from 'react'

const Tour = ({ image, name, price, info, id, removeTour }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <article className='single-tour'>
      <div>
        <img className='img' src={image} alt={name} />
        <div className='tour-price'>
          <span>$ {price}</span>
        </div>
      </div>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {showMore ? info + ' ' : info.substring(0, 155) + '... '}
          <button className='info-btn' onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
      </div>
      <button
        className='btn-block btn delete-btn'
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </article>
  )
}

export default Tour
