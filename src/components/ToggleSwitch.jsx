import React from 'react';

const ToggleSwitch = ({ checked, handleChecked, children }) => {
  return (
    <div className='relative flex items-center center w-[64px] h-[32px] p-1 bg-indigo_50 rounded-[60px] shadow-sm shadow-gray-400 z-50'>
      <input
        type='checkbox'
        checked={checked}
        className='absolute w-full h-full opacity-0 z-40'
        onChange={() => handleChecked()}
      />
      <button
        className='bg-indigo_400 w-[29px] h-[29px] rounded-full translate-x-[0] transition-transform'
        style={{
          transform: checked ? 'translateX(100%)' : 'translateX(0%)',
        }}></button>
      <div className='absolute w-full h-full flex items-center justify-between mt-[2px]  inset-0 px-2.5 pe-3'>
        {children}
      </div>
    </div>
  );
};

export default ToggleSwitch;
