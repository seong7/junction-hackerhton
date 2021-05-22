import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

export const AutoComplete = ({ typedText, className, onClick }) => {
  const [wordList, setWordList] = useState([]);

  useEffect(async () => {
    const jwt = window.localStorage.getItem('jwt');
    if (jwt === null) await Router.replace('/');

    if (typedText !== '') {
      try {
        const res = await axios.get(
          `http://192.168.0.4:3000/api/bus/station?queryString=${typedText}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          },
        );
        // console.log(res);
        setWordList(res.data);
      } catch (e) {
        console.error(e);
      }
    }
  }, [typedText]);

  const mergedClassName = `first:rounded-t-[10px] last:rounded-t-[10px] ${className}`;
  return (
    <>
      {wordList.length > 0 && (
        <ul
          style={{
            border: '3px solid #BDBDBD',
            borderRadius: '10px',
            position: 'absolute',
            width: '291px',
            maxHeight: '300px',
            overflow: 'hidden',
          }}
          className={mergedClassName}
        >
          {wordList.map((cur, idx) => {
            if (idx < 5) {
              return (
                <li
                  key={cur.id}
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
                    <p className='truncate'>{cur.name}</p>
                  </button>
                </li>
              );
            }
            return undefined;
          })}
        </ul>
      )}
    </>
  );
};
