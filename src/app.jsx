export default function articlepage() {
    return (
  <div>
  
      <header>
      <nav className="navbar">
        <h2 className="logo"><a href="#">ZenGarden</a></h2>
        <input type="checkbox" id="menu-toggler"/>
        <label htmlFor="menu-toggler" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </label>
        <ul className="all-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">courses</a></li>
          <li><a href="#portfolio">articles</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </nav>
      </header>
  
  
  
      <footer>
      <div>
        <span>Copyright © 2023 All Rights Reserved</span>
        <span className="link">
          <a href="#">Home</a>
          <a href="#contact">Contact</a>
        </span>
      </div>
    </footer>
    
  </div>
    )
  }