import React, { useEffect, useState } from 'react';

export const AutoComplete = ({ typedText, className, onClick }) => {
  const [isIncluding, setIsIncluding] = useState(false);

  const nakseongList = [
    '낙성대역',
    '낙성대입구',
    '낙성대현대아파트',
    '낙성대동시장입구',
    '낙성대동',
    '낙성대공원.영어마을',
  ];

  useEffect(() => {
    if (typedText.length >= 1) {
      setIsIncluding(nakseongList.some((c) => c.includes(typedText)));
    }
  }, [typedText]);

  const mergedClassName = `first:rounded-t-[10px] last:rounded-t-[10px] ${className}`;
  return (
    <>
      {isIncluding && (
        <ul
          style={{
            border: '3px solid #BDBDBD',
            borderRadius: '10px',
            position: 'absolute',
            width: '291px',
          }}
          className={mergedClassName}
        >
          {nakseongList.map((c, idx) => {
            const text = `${c} `;
            if (text.includes(typedText))
              return (
                <li
                  key={idx}
                  style={{
                    borderBottom: '1px solid #BDBDBD',
                  }}
                >
                  <button
                    type='button'
                    onClick={onClick}
                    onKeyUp={onClick}
                    className='active:bg-[#42b5f840] focus:bg-[#42b5f840]'
                    style={{
                      paddingTop: '10px',
                      paddingLeft: '10px',
                      width: '100%',
                      height: '40px',
                      textAlign: 'start',
                    }}
                  >
                    {c}
                  </button>
                </li>
              );
            return undefined;
          })}
        </ul>
      )}
    </>
  );
};
