import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { apiDeleteContacts } from "../../redux/contactsOps";

import css from "./Contact.module.css";
export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => {
    dispatch(apiDeleteContacts(id));
  };
  return (
    <>
      <div className={css.sectionContact}>
        <div className={css.contactBox}>
          <p className={css.contactNameBox}>
            <FaUserAlt />

            <span className={css.contactName}> {name}</span>
          </p>
          <p className={css.contactNumberBox}>
            <FaPhone />
            <span className={css.contactNumber}> {number}</span>
          </p>
        </div>
        <button
          className={css.contactButton}
          type="submit"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
