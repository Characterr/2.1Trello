/* eslint-disable react/require-default-props */
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

import React, { useEffect, useState } from 'react';
import { Button } from '../../../../common/components/Button';

export function Redact2(props: { children:any, title :any, redactElement:any, buttonName?:string }) {
  const { title, redactElement, buttonName } = props;
  const [isClick, setIsClick] = useState(false);
  let newTitle = title;

  const switchShowInput = (e:any):void => {
    e.target.onclick(setIsClick(!isClick));
  };

  const clones = React.Children.map(props.children, (child) => React.cloneElement(child, { onClick: switchShowInput }));

  const editSaveTitle = (e:any) => {
    newTitle = e.currentTarget.value;
    if (buttonName && e.type !== 'keydown') return;
    setIsClick(!isClick);
    redactElement(e.currentTarget.value);
  };

  function RedactTitle() {
    return (
      <input
        defaultValue={newTitle}

        onKeyDown={(e) => {
          if (e.code === 'Enter') { editSaveTitle(e); }
        }}

        onBlur={(e) => editSaveTitle(e)}
      />
    );
  }

  const toCreate = () => {
    redactElement(newTitle);
    setIsClick(!isClick);
  };

  const cancel = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      {clones.map((clon:any, i:number) => (isClick ? <RedactTitle key={i} /> : clon))}
      {isClick && buttonName
      && (
      <>
        <br />
        <Button buttonOnclick={toCreate} name={buttonName} classButton="" />
        <Button buttonOnclick={cancel} name="Скасувати" classButton="" />
      </>
      )}
    </>
  );
}
