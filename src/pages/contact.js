import React from 'react'
import { Link } from 'gatsby';
import Footer from '../components/footer';

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Her!</h1>
            <p>Call: 450-299-2222</p>
            <p>Email: ladida@nevermind.com</p>
            <p>Say hi on Twitter <Link to="https://twitter.com/icycodes"> @icycodes </Link></p>
        <Footer/>
        </div>
    )
}

export default ContactPage;