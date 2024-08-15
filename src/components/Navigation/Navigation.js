import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getLoggedIn } from "../../redux/auth-selectors"

export const Navigation = () => {
   const isLoggedIn= useSelector(getLoggedIn)
   return (
      <div>
         <nav>
            <NavLink to={'/'}>Home</NavLink>
          {isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}
         </nav>
      </div>
   )
}