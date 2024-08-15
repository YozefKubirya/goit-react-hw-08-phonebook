import { createSlice} from "@reduxjs/toolkit";
import { register, login,logout, refresh} from "./auth-operations";
const userInitialState={
   user:{
   name:null,email:null
   },
   token:null,
   isLoggedIn:false,
   isRefreshing:false
}
const authSlice=createSlice({
   name:'auth',
   initialState:userInitialState,
   extraReducers:builder=>{
      builder
.addCase(register.fulfilled,(state,{payload})=>{
state.user=payload.user;
state.token=payload.token;
state.isLoggedIn=true;
})
.addCase(login.fulfilled,(state,{payload})=>{
state.user=payload.user;
state.token=payload.token;
state.isLoggedIn=true;
})
.addCase(logout.fulfilled,(state,{payload})=>{
state.user= { name: null, email: null };
state.token=null;
state.isLoggedIn=false;
})
.addCase(refresh.pending,(state,)=>{
state.isRefreshing=true;
})
.addCase(refresh.fulfilled,(state, {payload})=>{
state.user=payload;
state.isRefreshing=false;
state.isLoggedIn=true
})
.addCase(refresh.rejected,(state)=>{
state.isRefreshing=false;
})
}
});

export const authReducer=authSlice.reducer;