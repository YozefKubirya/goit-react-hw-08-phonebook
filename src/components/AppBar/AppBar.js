import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { getLoggedIn } from "../../redux/auth-selectors"
import { Navigation } from "components/Navigation/Navigation"
import css from './AppBar.module.css'
export const AppBar = ()=>{
  const isLoggedIn=useSelector(getLoggedIn)
   return(
      <div>
         <header className={css.header}>
         <Navigation/>
         {isLoggedIn?<UserMenu/>:<AuthNav/>}
         </header>
      </div>
   )
}