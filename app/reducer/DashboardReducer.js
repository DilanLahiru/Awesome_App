import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginUserData: {},
};

export const LoginReducer = createSlice({
  name: 'loginUserData',
  initialState,
  reducers: {
    setLoginUserData: (state, action) => {
      state.loginUserData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLoginUserData} = LoginReducer.actions;

export const userLoginData = state => state.loginUserData.loginUserData;

export default LoginReducer.reducer;
