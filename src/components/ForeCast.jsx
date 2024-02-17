const ForeCast = ({ forecast, getTempUnit }) => {
  return (
    <div className='inline-flex flex-col items-center justify-between bg-white/[0.32] rounded-2xl w-[95px] h-[108px] p-4 flex-shrink-0 text-center select-none'>
      <h5 className='font-semibold text-gray_900 opacity-60'>
        {forecast.time.split(' ')[1]}
      </h5>
      <div className='w-12 h-12'>
        <img
          width='40'
          height='32'
          className='bg-cover select-none'
          src={forecast.condition.icon}
          alt='forecast weather icon'
        />
      </div>
      <h5 className='font-bold text-gray_900'>{getTempUnit(forecast)}</h5>
    </div>
  );
};

export default ForeCast;
