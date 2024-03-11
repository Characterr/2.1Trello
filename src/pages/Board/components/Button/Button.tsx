import React from 'react';
import './button.scss';

export function Button({ title } : { title: string }) :JSX.Element {
  return (
    <button className="button">{title}</button>
  );
}
