import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <div>
      <ul className={css.sectionContact}>
        {filteredContacts.map((contact) => {
          return (
            <Contact
              name={contact.name}
              number={contact.number}
              key={contact.id}
              id={contact.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
