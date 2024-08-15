import { useEffect, lazy } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { refresh } from '../redux/auth-operations';
import { getRefreshing } from '../redux/auth-selectors';
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonePage = lazy(() => import('../pages/PhoneBook'));

export const App = () => {
const isRefreshing =useSelector(getRefreshing);
const dispatch =useDispatch();
useEffect(()=>{
  dispatch(refresh())
},[dispatch])
 return( <Routes>
    {/* isRefreshing ? (<b>Refreshing user...</b>) :  */}
<Route path='/' element={Layout}/>
<Route index element={HomePage}/>
<Route  path="/register" element={RegisterPage}/>
<Route path="/login" element={LoginPage}/>
<Route path="/contacts" element={PhonePage}/>
    </Routes>)
    
      
};