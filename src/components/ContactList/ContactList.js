import Contact from 'components/Contact/Contact';

const ContactList = ({ items,onDelete }) => {
  return (
    <ul>
      {items.map((item, id) => (
        <li key={id}>
          <Contact contact={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
