import React from 'react'
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
        <h1>About the Artist</h1>
        <p>She is an artist who grew up in Rjekyavik, Iceland.</p>
        <p>An advocate against whale hunting, and an avid free-diver.</p>
        <p>Need a developer? <Link to="/contact">Contact me here!</Link></p>
        </div>
    )
}

export default AboutPage;