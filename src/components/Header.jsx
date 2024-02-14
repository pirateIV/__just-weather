/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';

import favicon from '../helpers/getFavicon';
import currentDate from '../helpers/formatDate';

const Header = ({ tempUnit, currentWeather }) => {
  const tempUnits = {
    celsius: `${currentWeather?.current.temp_c} °C`,
    fahrenheit: `${currentWeather?.current.temp_f} °F`,
  };

  const changeTempUnit = () => {
    if (tempUnit === 'temp_f') {
      return tempUnits.fahrenheit;
    } else {
      return tempUnits.celsius;
    }
  };

  useEffect(() => {
    currentWeather
      ? ((document.title = `${currentWeather?.location.name} (${
          currentWeather?.current.condition.text
        }) - ${changeTempUnit()}`),
        (favicon.href = currentWeather?.current.condition.icon))
      : (document.title = `Weather App`);
  }, [tempUnit, currentWeather]);

  return (
    <header className='relative  flex items-center justify-between mt-4'>
      {currentWeather && (
        <section className='flex flex-col leading-[0.9] items-start'>
          <p className='block font-bold text-gray_900/[0.55]'>{currentDate}</p>
          <div className='flex items-center justify-between gap-10'>
            <h3 className='text-headline_lg font-semibold text-gray_900/[0.87]'>
              {currentWeather?.location.name}
            </h3>
            <img
              src={currentWeather?.current.condition.icon}
              alt='weather condition icon'
              className='select-none'
              width={'70'}
            />
          </div>
          <h1 className='flex gap-4 text-headline_xl text-gray_900/[0.87] font-bold'>
            <span> {`${changeTempUnit()}`} </span>
          </h1>
        </section>
      )}
      <img
        src={currentWeather?.current.condition.icon}
        className='absolute -top-20 right-0 opacity-[0.06] w-60 h-60 select-none'
        alt='weather condition icon'
      />
    </header>
  );
};

export default Header;
