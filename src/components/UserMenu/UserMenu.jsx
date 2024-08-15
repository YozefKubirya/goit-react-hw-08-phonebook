import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/auth-operations";
import { getUser } from "../../redux/auth-selectors"; 
export const UserMenu = ()=>{
   const dispatch = useDispatch();
   const user=useSelector(getUser)
   return (
      <div>
         <p>Welcome {user.name}</p> 
         <button type="button" onClick={()=>{dispatch(logout())}}>Log Out</button>
      </div>
   )
}