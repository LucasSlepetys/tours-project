import { useEffect, useState } from 'react';
import toursList from './offline';
import Tour from './Tour';

const Tours = () => {
  const [tours, setTours] = useState(toursList);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setTours(toursList);
  }, [refresh]);

  function removeTour(id) {
    console.log(id);
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
      <h1 className='title'>Mallorca</h1>
      <div className=' title-underline '></div>

      <div className='tours'>
        {tours.map((tour) => {
          return (
            <div key={tour.id} className='single-tour'>
              <Tour {...tour} removeTour={removeTour} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
