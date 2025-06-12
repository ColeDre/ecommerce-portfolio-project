import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 justify-between"> 
        <ul className="nav__links">
          {/* TODO: reformat to map */}
          <li className="link"><Link to="/">Home</Link></li>
          <li className="link"><Link to="/shop">Shop</Link></li>
          <li className="link"><Link to="/">Pages</Link></li>
          <li className="link"><Link to="/contact">Resume</Link></li>
          {/* add a component to show experience */}
        </ul>

        {/* logo */}
        <div className="nav__logo">
          <Link to='/'>DeAndre Coleman <span>&#123; dev &#125;</span></Link>
        </div>

        <div className="nav__icons relative">
          <span>
            <Link to='/search'>
              <i className="ri-search-2-line"></i>
            </Link>
          </span>
          <span>
            <button className="hover:text-primary">
              <i className="ri-shopping-bag-4-line"></i>
              {/* want this alert to not display if cart is empty | TODO: padding not being applied to <sup> */}
              <sup 
                className="text-sm inline-block text-white bg-accent rounded-full text-center"
                style={{padding:'0 .2rem'}}
              >
                0
              </sup>
            </button>
          </span>
          <span>
            <Link to="login">
              <i className="ri-user-3-line"></i>
            </Link>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar