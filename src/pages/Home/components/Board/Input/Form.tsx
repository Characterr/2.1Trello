/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { DataVerification } from './DataVerification';

interface Board {
  title:string
  boardOperation:(title:string, obj?:{ title: string, custom: any })=>void
  method: string
  listener:(e:any)=>void
  withButton:boolean
  withBlur:boolean
}

export function Form(props: Board) :JSX.Element {
  const {
    boardOperation, method, title, listener, withButton, withBlur,
  } = props;

  const [state, setState] = useState({ title, isError: false });

  function submit(event:any) {
    if (state.isError) return;
    const addData = {
      title: state.title,
      custom: {
        description: 'desc',
        background: 'red',
      },
    };

    if (DataVerification(state.title)) {
      boardOperation(method, addData);
      setState({ ...state, title: '' });
    }
    event.preventDefault();
  }

  const handleChange = (e:any) => setState({ ...state, title: e.currentTarget.value });

  return (
    <form onSubmit={(e) => { submit(e); }}>
      <input
        placeholder="Введіть назву дошки"
        value={state.title}
        type="text"
        onChange={(e) => { handleChange(e); }}

        onBlur={(e) => {
          if (withBlur) {
            submit(e);
            listener(e);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            submit(e);
            listener(e);
          }
        }}
      />
      { withButton ? <input type="submit" value="Створити" /> : null}
    </form>
  );
}
