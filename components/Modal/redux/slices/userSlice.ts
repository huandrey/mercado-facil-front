import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { logout } from '@services/auth';

// import { login, logout, register, verifyToken } from '../../services/auth';
// import { updatePassword, updateProfile } from '../../services/user';

const initialState = {
  data: '',
  status: '',
  phones: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => ({
      ...state,
      ...action.payload,
    }),
    setPhones: (state, action: PayloadAction<any>) => ({
      ...state,
      phones: action.payload,
    }),
    // changeStatusSMS: (state, action: PayloadAction<any>) => ({
    //   ...state,
    //   phones: { ...phones, isRecebeFaturaSms: !state.phones.isRecebeFaturaSms },
    // }),
    // logout: (state, action: PayloadAction<any>) => ({
    //   ...initialState,
    // }),
  },
  extraReducers: {
    [logout?.pending]: (state) => {
      state.status = 'loading';
    },
    [logout?.fulfilled]: (state) => ({
      ...initialState,
    }),
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
export const { setUser, setPhones } = userSlice.actions;
export default userSlice.reducer;
