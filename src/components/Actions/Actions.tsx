import React from 'react';
import { Action } from '../Action/action';
import { Display } from '../Display/display';

export function Actions() {
  return (
    <>
      <div className="actions">
        <Display></Display>
        <Action></Action>
      </div>
    </>
  );
}
