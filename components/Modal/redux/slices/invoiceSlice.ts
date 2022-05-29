import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { login, logout, register, verifyToken } from '../../services/auth';
// import { updatePassword, updateProfile } from '../../services/user';

const initialState = {
  currentInvoice: {},
  pastInvoices: [],
  invoiceEmail: false,
  invoiceSms: false,
  closedInvoice: {},
};

export const cardSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    setCurrentInvoice: (state, action: PayloadAction<any>) => ({
      ...state,
      currentInvoice: { ...state.currentInvoice, ...action.payload },
    }),
    setPastInvoices: (state, action: PayloadAction<any>) => ({
      ...state,
      pastInvoices: [...action.payload],
    }),
    setInvoiceEmail: (state, action: PayloadAction<any>) => ({
      ...state,
      invoiceEmail: action.payload,
    }),
    setInvoiceSMS: (state, action: PayloadAction<any>) => ({
      ...state,
      invoiceSms: action.payload,
    }),
    setClosedInvoice: (state, action: PayloadAction<any>) => ({
      ...state,
      closedInvoice: action.payload,
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
export const {
  setCurrentInvoice,
  setPastInvoices,
  setInvoiceEmail,
  setInvoiceSMS,
  setClosedInvoice,
} = cardSlice.actions;
export default cardSlice.reducer;
