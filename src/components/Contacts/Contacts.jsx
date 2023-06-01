import ContactItem from './ContactItem';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact, index) => (
          <ContactItem
            deleteContact={deleteContact}
            key={index}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
