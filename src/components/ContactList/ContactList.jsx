import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter((contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      ) || []
    );
  }, [contacts, filterValue]);

  return (
    <div>
      <ul className={css.sectionContact}>
        {filteredContacts.map((contact) => {
          return (
            <Contact
              name={contact.name}
              number={contact.number || "No number available"}
              key={contact.id}
              id={contact.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
