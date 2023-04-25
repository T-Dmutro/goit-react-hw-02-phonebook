export const ContactList =({contacts, onDeleteContact})=>{
    // console.log(typeof contacts);
    // contacts.map(element => {
    //     console.log(element)
    // });
    
    return(
        <ul>
            <p>Contacts</p>
            {contacts.map(({id, name, number}) => (
                <li key={id}>
                    <span></span>
                    <p>{name}:{number}</p>
                    <button  onClick={( )=> onDeleteContact(id)}>Delete</button>
                </li>
            ))}
    </ul>

    )
}

