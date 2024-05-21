/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';

export function Redact2(props: { children:any, redactComponent:any, title :any, setTitle:any }) {
  const [isClick, setIsClick] = useState(false);
  const { redactComponent, title, setTitle } = props;

  const switchShowInput = (e:any):void => {
    e.target.onclick(setIsClick(!isClick));
  };

  const clones = React.Children.map(props.children, (child) => React.cloneElement(child, { onClick: switchShowInput }));

  function editSaveTitle(e:any) {
    setIsClick(!isClick);
    redactComponent(e.currentTarget.value);
    setTitle(e.currentTarget.value);
  }

  function RedactTitle() {
    return (
      <input
        defaultValue={title}

        onKeyDown={(e) => {
          if (e.code === 'Enter') { editSaveTitle(e); }
        }}

        onBlur={(e) => editSaveTitle(e)}
      />
    );
  }

  return (
    <>
      {clones.map((clon:any, i:number) => (isClick ? <RedactTitle key={i} /> : clon))}
    </>
  );
}
