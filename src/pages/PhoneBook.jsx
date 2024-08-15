import { Form } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import { Contacts } from "components/Contacts/Contacts";
export const PhoneBook = () => {
   return (
      <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts  />
      </div>
   )
}