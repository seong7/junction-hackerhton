import React, { useState } from 'react';
import BusIcon from '../../../../../public/BusIcon';

export const BusList = ({ busList, setSelectedBusId, selectedBusId }) => {
  const iconColors = ['blue', 'red', 'green', 'yellow'];

  const handleClick = (e) => {
    setSelectedBusId(e.target.value);
  };

  return (
    <div>
      {busList.map((bus, idx) => (
        <div key={bus.id}>
          <label
            className='h-[58px] flex items-center pl-[20px] pr-[20px] text-[20px]'
            style={{
              borderBottom: '1px solid #BDBDBD',
              background: `${selectedBusId === `${bus.id}` ? 'rgb(66 182 248 / 31%)' : ''}`,
            }}
            htmlFor={`${bus.id}`}
          >
            <div className='flex justify-content-between w-[100%]'>
              <div className='flex'>
                <BusIcon color={iconColors[idx % iconColors.length]} />
                <p className='ml-[10px]'>{bus.name}</p>
              </div>
              {/* {bus.} */}
            </div>
          </label>
          <input
            type='radio'
            id={`${bus.id}`}
            style={{ display: 'none' }}
            value={bus.id}
            onClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
};
