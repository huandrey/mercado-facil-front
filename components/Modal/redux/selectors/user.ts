import { createSelector } from '@reduxjs/toolkit';

const userSelector = createSelector(
  (state: any) => state.user,
  (user) => {
    const { nome, email, phone, clienteDataNascimento, phones } = user;
    return {
      name: nome,
      email,
      birthDate: clienteDataNascimento,
      phone,
      phones,
    };
  },
);

export { userSelector };
