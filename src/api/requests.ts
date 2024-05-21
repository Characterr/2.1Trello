/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/space-infix-ops */
/* eslint-disable no-shadow-restricted-names */
/* eslint-disable consistent-return */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable max-len */
/* eslint-disable wrap-iife */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import api from '../../../../api/request';

import { Interface } from 'readline';
import { number } from 'prop-types';
import api from './request';

// export const getBoards = () => {
//   (async function () {
//     await api.get('/board/');
//   })();
// };

// export const getBoard = (id: number) => {
//   (async function () {
//     await api.get(`/board/${id}`);
//   })();
// };

// export const deleteBoard = (id: number) => {
//   (async function () {
//     await api.delete(`/board/${id}`);
//   })();
// };

// export const postBoards = (obj: { title: string; custom: { description: string } }) => {
//   (async function () {
//     await api.post('/board/', obj);
//   })();
// };

// export const putBoard = (id: number, obj: { title: string; custom: { description: string; color: string } }) => {
//   (async function () {
//     await api.put(`/board/${id}`, obj);
//   })();
// };

// export const createList = (id: number, obj: { title: string; position: number }) => {
//   (async function () {
//     await api.post(`/board/${id}/list`, obj);
//   })();
// };

// export const changePositionList = (boardId: number, newLists: [{ id: number; position: number }]) => {
//   (async function () {
//     await api.put(`/board/${boardId}/list`, newLists);
//   })();
// };

// export const redactList = (boardId: number, listId: number, obj: { position: number }) => {
//   (async function () {
//     await api.put(`/board/${boardId}/list/${listId}`, obj);
//   })();
// };

// export const deleteList = (boardId: number, listId: number) => {
//   (async function () {
//     await api.delete(`/board/${boardId}/list/${listId}`);
//   })();
// };

// interface DataCard {
//   title: string;
//   list_id: number;
//   position: number;
//   description: string;
//   custom: {
//     deadline: string;
//   };
// }

// export const createCard = (boardId: number, obj: DataCard) => {
//   (async function () {
//     await api.post(`/board/${boardId}/card`);
//   })();
// };

// export const redactCards = (boardId: number, newCards: [{ cardId: number; position: number; listId: number }]) => {
//   (async function () {
//     await api.put(`/board/${boardId}/card`);
//   })();
// };

// export const redactCard = (boardId: number, cardId: number, obj: DataCard) => {
//   (async function () {
//     await api.put(`/board/${boardId}/card/${cardId}`, obj);
//   })();
// };

// export const deleteCard = (boardId: number, cardId: number) => {
//   (async function () {
//     await api.delete(`/board/${boardId}/card/${cardId}`);
//   })();
// };

// export const assignRemoveUsersToCard = (boardId: number, cardId: number, obj: { add: string[]; remove: string[] }) => {
//   (async function () {
//     await api.put(`/board/${boardId}/card/${cardId}/users`);
//   })();
// };

// export const getUserById = (boardId: number, userId: number, obj: { id: number }) => {
//   (async function () {
//     await api.put(`/board/${boardId}/user/${userId}`);
//   })();
// };

const r = {
  boardId: '',
  cardId: '',
  listId: '',
};
const paramsMap = new Map([
  [
    'getBoards',
    {
      method: api.get,
      url: () => '/board/',
      properties: null,
    },
  ],
  [
    'getBoard',
    {
      method: api.get,
      url: () => `/board/${r.boardId}`,
      properties: null,
    },
  ],

  [
    'deleteCard',
    {
      method: api.delete,
      url: () => `/board/${r.boardId}/card/${r.cardId}`,
      properties: [4],
      obj: {},
    },
  ],
  [
    'redactCard',
    {
      method: api.put,
      url: () => `/board/${r.boardId}/card/${r.cardId}`,
      properties: [4],
    },
  ],
]);

export function requests(operation: string) {
  const params = paramsMap.get(operation);
  let makeRequest: any;
  let url: any;

  if (params && params.method) {
    makeRequest = params.method;
    url = params.url;
  }

  const requestFun = async (obj?: any) => {
    if (obj) {
      if (obj.boardId) r.boardId = obj.boardId;
      if (obj.cardId) r.cardId = obj.cardId;
      if (obj.listId) r.listId = obj.listId;
    }

    let res;

    if (obj && obj.transferredObj) {
      return await makeRequest(url(), obj.transferredObj);
    }
    return await makeRequest(url());
  };

  return requestFun;
}
