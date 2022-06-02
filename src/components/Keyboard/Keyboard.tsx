import React from 'react';
import { Key } from '../Key/key';
export function Keyboard() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  return (
    <>
      <ol className="keyboard">
        {numbers.map((item) => (
          <li key={item}>
            <Key item={item}></Key>
          </li>
        ))}
        <li>
          <button className="key big">delete</button>
        </li>
      </ol>
    </>
  );
}
