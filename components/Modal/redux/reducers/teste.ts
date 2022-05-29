/* eslint-disable default-param-last */
import { Action } from '../actionsTypes';

const INITIAL_STATE = {
  individualContaDigital: '',
};

export default (state = INITIAL_STATE, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_DADOS_CLIENTE_CONTA':
      // // console.log(payload);
      return {
        ...payload,
        listaCartaoContaDigital: payload?.listaCartaoContaDigital,
      };
    case 'UPDATE_SALDO':
      return {
        ...state,
        saldoDisponivelGlobal: payload,
      };
    case 'SET_BLOCK_ACCOUNT':
      return {
        ...state,
        idStatusConta: payload.idStatusConta,
        statusConta: payload.statusConta,
      };
    case 'UPDATE_CARDS': {
      return {
        ...state,
        listaCartaoContaDigital: payload,
      };
    }
    case 'CLEAN_DADOS_CLIENTE_CONTA':
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
