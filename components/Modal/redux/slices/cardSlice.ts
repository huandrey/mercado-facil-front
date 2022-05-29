import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { login, logout, register, verifyToken } from '../../services/auth';
// import { updatePassword, updateProfile } from '../../services/user';

const initialState = {
  wallet: '',
  cardSelected: {
    dadosCartao: {},
  },
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<any>) => ({
      ...state,
      wallet: action.payload,
    }),
    setCard: (state, action: PayloadAction<any>) => ({
      ...state,
      cardSelected: action.payload,
    }),
    changeStatusCard: (state, action: PayloadAction<any>) => ({
      ...state,
      cardSelected: {
        ...state.cardSelected,
        dadosCartao: {
          ...state.cardSelected.dadosCartao,
          status: action.payload,
        },
      },
    }),
  },
  extraReducers: {
    // [login.pending]: (state) => {
    //   state.status = 'loading';
    // },
    // [login.fulfilled]: (state, action) => {
    //   state.user = { ...state.user, ...action.payload };
    //   state.status = 'sucess';
    //   state.isAuthenticated = true;
    // },
    // [login.rejected]: (state, action) => {
    //   state.error = action.error;
    //   state.status = 'failed';
    //   state.isAuthenticated = false;
    // },
  },
});

// export const { authenticate, deny } = authSlice.actions;
// export const selectStatus = (state) => state.auth.status;
// export const getBasicUserData = (state) => {
//   state.user.name,
// };
export const { setCards, setCard, changeStatusCard } = cardSlice.actions;
export default cardSlice.reducer;
