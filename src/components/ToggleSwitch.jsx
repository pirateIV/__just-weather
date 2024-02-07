import React from 'react';


const ToggleSwitch = ({ checked, handleChecked, children }) => {
  return (
    <div className='relative flex items-center center w-[64px] h-[32px] p-1 bg-indigo_50 rounded-[60px] shadow-md shadow-black/20'>
      <input
        type='checkbox'
        checked={checked}
        className='absolute w-full h-full opacity-0 z-40'
        onChange={() => handleChecked()}
      />
      <button
        className='bg-indigo_400 w-[28px] h-[28px] rounded-full translate-x-[0] transition-transform'
        style={{
          transform: checked ? 'translateX(100%)' : 'translateX(0%)',
        }}></button>
      <div className='absolute w-full h-full flex items-center justify-between mt-[2px] inset-y-0 ps-[6px] pe-4'>
        {children}
      </div>
    </div>
  );
};

export default ToggleSwitch;
