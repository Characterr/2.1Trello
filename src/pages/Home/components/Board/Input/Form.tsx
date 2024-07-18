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
import { requests } from '../../../../../api/requests';

interface Board {
  title:string
  listener:(e:any)=>void
  withButton:boolean
  withBlur:boolean
  updateBoards:()=>void
}

export function Form(props: Board) :JSX.Element {
  const {
    title, listener, withButton, withBlur, updateBoards,
  } = props;

  const [state, setState] = useState({ title, isError: false, bg: null });

  const createBoard = requests('createBoard');
  async function submit(event:any) {
    if (state.isError) return;
    const addData = {
      title: state.title,
      custom: {
        description: 'desc',
        background: state.bg,
      },
    };

    if (DataVerification(state.title)) {
      (async () => {
        await createBoard({ transferredObj: addData });
        updateBoards();
        // show placeholder
        setState({ ...state, title: '' });
      })();
    }
    event.preventDefault();
  }

  const changeBordTitle = (e:any) => setState({ ...state, title: e.currentTarget.value });
  const changeBordBg = (e:any) => setState({ ...state, bg: e.currentTarget.value });

  return (
    <form onSubmit={(e) => { submit(e); }}>
      <input
        placeholder="Введіть назву дошки"
        value={state.title}
        type="text"
        onChange={(e) => { changeBordTitle(e); }}

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
      <br />
      <input type="color" onInput={(e) => { changeBordBg(e); }} />
      <hr />
      { withButton ? <input type="submit" value="Створити" /> : null}
    </form>
  );
}
