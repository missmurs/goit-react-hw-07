import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filtredContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={css.sectionContact}>
        {filtredContacts.map((contact) => {
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
