import Card from './common/Card';

const Detail = () => {

  return (
    <div className=' bg-white/[0.32] rounded-[16px] p-10 w-[241px] h-[105px] '></div>
  )
};

const WeatherDetails = () => {
  return (
    <Card
      title={'Weather Details'}
      ht={'h-[308px]'}
      id='weatherDetails'>
      <div className='w-full h-full mt-3'>
        <div className='grid grid-cols-3'>
          <Detail />
          <Detail />
          <Detail />
          <Detail />
          <Detail />
          <Detail />
        </div>
      </div>
    </Card>
  );
};

export default WeatherDetails;
