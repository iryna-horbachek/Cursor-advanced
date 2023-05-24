function Contact(props) {
    return (
        <div className='Contact'>
            <p className='Name'>Name: {props.firstName}</p>
            <p className='OtherData'>Surname: {props.lastName}</p>
            <p className='OtherData'>Phone: {props.phone}</p>
            <p className='OtherData'>Gender: {props.gender}</p>
        </div>
    )
}

export default Contact;