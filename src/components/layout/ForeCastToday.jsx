import Container from '../common/Container';

// eslint-disable-next-line react/prop-types
const ForeCastToday = ({ tempUnit, dailyForecast }) => {
  const getTempUnit = (forecast) => {
    if (tempUnit === 'temp_f') {
      return `${forecast.temp_f} °F`;
    } else {
      return `${forecast.temp_c} °C`;
    }
  };
  return (
    <section className='mt-10 h-[190px]'>
      <Container>
        <div className='flex flex-col items-start justify-between w-full h-full bg-indigo_50 p-[20px] rounded-2xl'>
          <h4 className='text-body_2 text-gray_900/[0.6] font-semibold uppercase '>
            Today&apos;s Forecast
          </h4>
          <div className='overflow-hidden gap-4 w-full flex items-center justify-center h-[120px]'>
            {dailyForecast?.map((forecast) => (
              <div
                key={forecast.time_epoch}
                className='inline-flex flex-col items-center justify-center bg-white/[0.32] rounded-2xl w-[95px] h-[108px] p-4 flex-shrink-0 text-center'>
                <h5 className='font-bold text-gray-400'>{forecast.time.split(' ')[1]}</h5>
                <img
                  src={forecast.condition.icon}
                  alt='forecast weather icon'
                  width='50'
                />
                <h5 className='font-bold'>{getTempUnit(forecast)}</h5>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ForeCastToday;
