import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';


const ContactPage = () => {
    return (
        <Layout>
        <h1>Contact Her!</h1>
        <p>Call: 450-299-2222</p>
        <p>Email: ladida@nevermind.com</p>
        <p>Say hi on Twitter <Link to="https://twitter.com/icycodes"> @icycodes </Link></p>
        </Layout>
    )
}

export default ContactPage;