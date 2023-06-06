import { useState } from 'react';

function Tour({ id, price, image, name, info, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  console.log(price);

  return (
    <>
      <div className='tour-price'>{price}</div>
      <img className='img' src={image} alt={name} />
      <div className='tour-info'>
        <h5>{name}</h5>
        <div>
          {readMore ? (
            <p onClick={() => setReadMore(false)}>
              {' '}
              {info + ' '} <div style={{ color: 'blueviolet' }}>Read Less</div>
            </p>
          ) : (
            <p
              onClick={() => {
                setReadMore(true);
              }}
            >
              {info.substring(0, 400) + '... '}
              <b style={{ color: 'blueviolet' }}>Read More</b>
            </p>
          )}
        </div>
      </div>

      <button
        type='button'
        onClick={() => removeTour(id)}
        className='info-btn btn'
      >
        Remove
      </button>
    </>
  );
}

export default Tour;
