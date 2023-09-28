import React from 'react'

const Tour = ({ image, name, price, info }) => {
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
          {info}
          <button className='info-btn'> Read More</button>
        </p>
      </div>
      <button className='btn-block btn delete-btn'>Not Interested</button>
    </article>
  )
}

export default Tour
