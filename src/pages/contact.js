import React from 'react'
import { Link } from 'gatsby';

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Her!</h1>
            <p>Call: 450-299-2222</p>
            <p>Email: ladida@nevermind.com</p>
            <p><Link to="https://twitter.com/icycodes"> Twitter </Link></p>
        </div>
    )
}

export default ContactPage;