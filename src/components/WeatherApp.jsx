import React from 'react'

const WeatherApp = ({children}) => {
  return (
    <div className='h-full w-full min-h-screen'>{children}</div>
  )
}

export default WeatherApp