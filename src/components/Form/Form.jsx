
import { nanoid } from "nanoid";
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { addContactThunk } from "../../redux/operations";

export const Form = () =>{
 const contacts=useSelector(getContacts);
 const dispatch=useDispatch();

  const  handleSubmit = e => {
   e.preventDefault();
   const {name,number}=e.currentTarget.elements;
   const includeName = contacts.find(user => user.name === name.value);
   if (includeName) {
   alert(`${name.value} is already in contacs`);
   } else {
   dispatch(addContactThunk({name:name.value,number:number.value}));          
   }
   e.currentTarget.reset();
                            }
   
   
      const inputNameId = nanoid();
      const inputNumbId = nanoid();
      return (
         <>
            <form onSubmit={handleSubmit}>
               <label htmlFor={inputNameId}>Name
                  <input
                     id={inputNameId}
                     type="text"
                     name="name"
                     pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required />
               </label>
               <label htmlFor={inputNumbId}>Number
                  <input
                     id={inputNumbId}
                     type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                  />
               </label>
               <button type="submit" >Add contact</button>
            </form>
         </>)
   
}

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};