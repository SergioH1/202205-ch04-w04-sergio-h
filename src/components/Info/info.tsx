import React from 'react';
import { Keyboard } from '../Keyboard/Keyboard';
export function Info() {
  const template = (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard></Keyboard>
        </div>
        <div className="actions">
          <span className="number">667359961</span>

          <a href="#" className="call">
            Call
          </a>

          <a href="#" className="hang active">
            Hang
          </a>
        </div>
      </main>
    </div>
  );
  return template;
}
