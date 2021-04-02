import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <div>
      <header className={headerStyles.header}>
        <h1>
          <Link className={headerStyles.title} to="/">
            Icy Codes
          </Link>
        </h1>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="../blog">
                Writings
              </Link>{" "}
            </li>
            <li>
              <Link className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="../about">
                About
              </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="../contact">
                Get In Touch
              </Link>{" "}
            </li>
            <li>
              <Link className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
