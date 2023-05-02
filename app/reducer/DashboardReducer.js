import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginUserData: {},
  accessToken: '',
};

export const LoginReducer = createSlice({
  name: 'loginUserData',
  initialState,
  reducers: {
    setLoginUserData: (state, action) => {
      state.loginUserData = action.payload;
    },
    setLoginUserAccessToken: (state, action) => {
      console.log('setLoginUserAccessToken');
      console.log(action.payload);
      state.accessToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLoginUserData, setLoginUserAccessToken} = LoginReducer.actions;

export const userLoginData = state => state.loginUserData.loginUserData;
export const userAccessToken = state => state.loginUserData.accessToken;

export default LoginReducer.reducer;
