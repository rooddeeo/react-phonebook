import Todo from '../Todo/Todo';
// import css from './Notification.module.css'

const ListContacts = ({ contacts }) => {
  console.log('list:', { contacts });
  return (
    <ul>
      {contacts.map(contact => (
        <Todo key={contact.id} todo={contact} />
      ))}
    </ul>
  );
};
export default ListContacts;
