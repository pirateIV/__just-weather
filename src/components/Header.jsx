import Container from './common/Container';

import { useEffect } from 'react';

const Header = ({ tempUnit, currentWeather }) => {
  const changeTempUnit = () => {
    if (tempUnit === 'temp_f') {
      return `${currentWeather?.current.temp_f} °F`;
    } else {
      return `${currentWeather?.current.temp_c} °C`;
    }
  };

  useEffect(() => {
    currentWeather
      ? (document.title = `${currentWeather?.location.name} - ${changeTempUnit()}`)
      : (document.title = `Weather App`);
  }, [tempUnit, currentWeather]);

  return (
    <Container>
      <header className='mt-4'>
        {currentWeather && (
          <section className='flex flex-col leading-tight'>
            <div className='flex items-center gap-3'>
              <h3 className='text-headline_lg font-semibold text-gray_900/[87]'>
                {currentWeather?.location.name}
              </h3>
              <img
                src={currentWeather?.current.condition.icon}
                alt='weather condition icon'
                width={'70'}
              />
            </div>
            <h1 className='text-headline_xl text-gray_900 text-gray_900/[87] font-bold'>
              {`${changeTempUnit()}`}{' '}
              {/* <span className='text-gray_600_opacity_60'>-1°</span> */}
            </h1>
          </section>
        )}
      </header>
    </Container>
  );
};

export default Header;
