import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm Zahra, a full stack developer living in
        beautiful Northern Virginia.</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    <Footer />
    </div>
  )
}

export default IndexPage;