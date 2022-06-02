import React from 'react';
import { Actions } from '../Actions/Actions';
import { Keyboard } from '../Keyboard/Keyboard';
export function Info() {
  const template = (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard></Keyboard>
        </div>
        <Actions></Actions>
      </main>
    </div>
  );
  return template;
}
