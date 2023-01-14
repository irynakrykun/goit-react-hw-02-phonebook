import Contact from 'components/Contact/Contact';
import { List,ListItem} from './ContactList.styled';
const ContactList = ({ items,onDelete }) => {
  return (
    <List>
      {items.map((item, id) => (
        <ListItem key={id}>
          <Contact contact={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
