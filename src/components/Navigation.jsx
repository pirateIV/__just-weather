/* eslint-disable react/prop-types */
import { useState } from 'react';

import ToggleSwitch from './ToggleSwitch';
import SwitchDegree from './common/SwitchDegree';

const Navigation = (props) => {
  const { children, tempUnit, setTempUnit } = props;

  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    setTempUnit(tempUnit === 'temp_f' ? 'temp_c' : 'temp_f');
  };

  return (
    <nav className='w-full'>
      <div className='w-full flex items-center justify-between py-8'>
        <img
          src='./src/assets/icons/logo.svg'
          alt='weather app logo'
          className='pointer-events-none object-cover'
        />
        {children}
        <ToggleSwitch
          checked={checked}
          handleChecked={handleChecked}>
          <SwitchDegree
            value='°F'
            type='fahrenheit'
            cs={checked ? '' : 'text-gray_100'}
          />
          <SwitchDegree
            value='°C'
            type='celsius'
            cs={!checked ? '' : 'text-gray_100'}
          />
        </ToggleSwitch>
      </div>
    </nav>
  );
};

export default Navigation;
