import _ from 'lodash';

import Card from './common/Card';
import ForeCast from './ForeCast';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ForeCastToday = ({ tempUnit, dailyForecast }) => {
  const getTempUnit = (forecast) => {
    if (tempUnit === 'temp_f') {
      return `${forecast.temp_f} °F`;
    } else {
      return `${forecast.temp_c} °C`;
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 2,
    },
  };

  return (
    <Card
      ht={`h-[185px]`}
      id='forecastToday'
      title={`Today's Forecast`}>
      <Carousel
        arrows={true}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        responsive={responsive}
        transitionDuration={500}
        customTransition='transform 500ms ease-in-out'
        containerClass='flex justify-start ms-2 items-center space-x-2 h-[120px]'>
        {_.map(dailyForecast, (forecast) => (
          <ForeCast
            forecast={forecast}
            key={forecast.time_epoch}
            getTempUnit={getTempUnit}
          />
        ))}
      </Carousel>
    </Card>
  );
};

export default ForeCastToday;
