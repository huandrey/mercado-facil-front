import { createSelector } from '@reduxjs/toolkit';

const cardSelector = createSelector(
  (state: any) => state.card,
  (card) => {
    const {
      token,
      numeroCartao,
      dadosCliente,
      dadosCartao,
      informacoesCartaoResponse,
    } = card.cardSelected;
    return {
      token,
      cardNumber: numeroCartao,
      cardHolder: dadosCliente.nome,
      bestCardDay: informacoesCartaoResponse.melhorDiaCompra,
      dueDate: informacoesCartaoResponse.dataVencimentoFatura,
      amount: informacoesCartaoResponse.valorFatura,
      id: informacoesCartaoResponse.idCartao,
      graphic: {
        mainLimit: informacoesCartaoResponse.limitePrincipal,
        withdrawLimit: informacoesCartaoResponse.limiteSaque,
        installmentLimit: informacoesCartaoResponse.limiteParcelado,
        mainBalance: informacoesCartaoResponse.saldoDisponivel,
        withdrawBalance: informacoesCartaoResponse.saldoDisponivelSaque,
        installmentBalance: informacoesCartaoResponse.saldoDisponivelParcelado,
      },
      status: dadosCartao.status,
    };
  },
);

const cardsSelector = createSelector(
  (state: any) => state.card,
  (card) => {
    return card.wallet;
  },
);

export { cardSelector, cardsSelector };
