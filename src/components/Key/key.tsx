import React from 'react';
export function Key({ item }: { item: string }) {
  const template = (
    <>
      <button value={item} className="key">
        {item}
      </button>
    </>
  );
  return template;
}
