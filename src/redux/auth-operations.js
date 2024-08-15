import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL='https://connections-api.herokuapp.com';
 
const setAuthToken= token=>{
   return axios.defaults.headers.common.Authorization=`Bearer ${token}`
};

const clearAuthToken= token=>{
   return axios.defaults.headers.Authorization=``;
};

export const register= createAsyncThunk('auth/register',async(credentials,thunkAPI)=>{
try{
   const {data}=await axios.post('/users/signup',credentials);
setAuthToken(data.token);
return data;}
catch(e){
thunkAPI.rejectWithValue(e.message);
}
});

export const login=createAsyncThunk('auth/login',async(credentials,thunkAPI)=>{
   try {
      const {data}= await axios.post('/users/login',credentials);
      setAuthToken(data.token);
      return data;
   } catch (e) {
      thunkAPI.rejectWithValue(e.message);
   }

});
export const logout=createAsyncThunk('auth/logout',async(_,thunkAPI)=>{
   try {
    const {data}=await axios.post('/users/logout',) 
    clearAuthToken();
    return data;
   } catch (e) {
      thunkAPI.rejectWithValue(e.message)
   }
});

export const refresh = createAsyncThunk('auth/refresh', async(_,thunkAPI)=>{
const state= thunkAPI.getState;
const persistedToken=state.auth.token
if (persistedToken===null){
   return thunkAPI.rejectWithValue('Unable to fetch user')
}
   try {
      const {data}=await axios.get('/users/current')
setAuthToken(persistedToken);
return data;
   } catch (e) {
      
   }
})