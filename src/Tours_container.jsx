import { useEffect, useState } from 'react';
import toursList from './offline';

const Tours = () => {
  const [tours, setTours] = useState(toursList);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setTours(toursList);
  }, [refresh]);

  function removeTour(id) {
    setTours(tours.filter((tour) => tour.id !== id));
  }

  if (tours.length === 0) {
    return (
      <button
        className='btn center'
        type='button'
        onClick={() => setRefresh(!refresh)}
      >
        Refresh Page
      </button>
    );
  }

  return (
    <div>
      <h1 className='title title-underline '>Tours</h1>

      <div className='tours'>
        {tours.map((tour) => {
          const { id, price, image, name, info } = tour;

          return (
            <div key={id} className='single-tour'>
              <div className='tour-price'>{price}</div>
              <img className='img' src={image} alt={name} />
              <div className='tour-info'>
                <h5>{name}</h5>
                <p>{<InfoSection infomation={info} />}</p>
              </div>

              <button
                type='button'
                onClick={() => removeTour(id)}
                className='info-btn btn'
              >
                Not interested
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  function InfoSection({ infomation }) {
    const [info, setInfo] = useState(infomation);
    useEffect(() => {}, []);
    return <>{info}</>;
  }
};

export default Tours;
