import './App.css';

import Navigation from './components/layout/Navigation';
import WeatherApp from './components/layout/WeatherApp';

function App() {
  return (
    <>
      <WeatherApp>
        <Navigation></Navigation>
      </WeatherApp>
    </>
  );
}

export default App;
