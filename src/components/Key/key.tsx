import React from 'react';
export function Key({ item }: { item: string }) {
  const template = (
    <>
      <button className="key">{item}</button>
    </>
  );
  return template;
}
