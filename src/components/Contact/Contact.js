import{Description,Button} from '../Contact/Contact.styled'

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <Description>{name}</Description>
          <Description>{number}</Description>
          <Button type="button" onClick={()=>onDelete(id)}>Delete</Button>
    </>
  );
};
export default Contact;
