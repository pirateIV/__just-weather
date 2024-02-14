import _ from 'lodash';
import Container from '../common/Container';
import Card from '../common/Card';

const ForeCast = ({ forecast, dailyForecast, getTempUnit }) => {
  return (
    <div className='inline-flex flex-col items-center justify-center bg-white/[0.32] rounded-2xl w-[95px] h-[108px] p-4 flex-shrink-0 text-center'>
      <h5 className='font-bold text-gray-400'>{forecast.time.split(' ')[1]}</h5>
      <img
        src={forecast.condition.icon}
        alt='forecast weather icon'
        width='50'
      />
      <h5 className='font-bold'>{getTempUnit(forecast)}</h5>
    </div>
  );
};

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
    <Card
      id='forecastToday'
      height='190'
      title={`Today's Forecast`}
      cs={`flex flex-col items-start justify-between`}>
      <div className='overflow-hidden gap-4 w-full flex items-center justify-center'>
        {_.map(dailyForecast, (forecast) => (
          <ForeCast
            forecast={forecast}
            key={forecast.time_epoch}
            getTempUnit={getTempUnit}
            dailyForecast={dailyForecast}
          />
        ))}
      </div>
    </Card>
  );
};

export default ForeCastToday;
