import { useDispatch } from "react-redux"
import { login } from "../../redux/auth-operations";

export const LoginForm = () => {
   const dispatch= useDispatch();
   const handleSubmit = e =>{
      e.preventDefault();
      const form=e.currentTarget;
      dispatch(login({
         email:form.elements.email.value,
         password:form.elements.password.value
      }))
      form.reset()
   }
   return (
    <form onSubmit={handleSubmit} autoComplete="off">
<label>
<input type="email" name="email">Email</input>
</label>
<label>
<input type="password" name="password">Password</input>   
</label>
<button type="submit">Log In</button>
    </form>
   )
}