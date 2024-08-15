import './index.css'

const Header = () => (
  <section className="header-div">
    <nav className="nav">
      <div className="logo-div">
        <a href="https://im.ge/i/Subtract.faFQ5r">
          <img
            src="https://i.im.ge/2024/08/14/faFQ5r.Subtract.png"
            alt="Subtract"
            border="0"
            className="logo"
          />
        </a>

        <h1 className="logo-h1">
          M<span className="span-h1">umair</span>
        </h1>
      </div>

      <ul className="ul-div">
        <li className="nav-items">
          <a href="home">Home</a>
        </li>
        <li className="nav-items">
          <a href="about">About Me</a>
        </li>
        <li className="nav-items">
          <a href="services">Services</a>
        </li>
        <li className="nav-items">
          <a href="projects">Projects</a>
        </li>
        <li className="nav-items">
          <a href="testimonials">Testimonials</a>
        </li>
        <li className="nav-items">
          <a href="contact">Contact</a>
        </li>
      </ul>

      <button type="button" className="btn-download-cv">
        Download CV
      </button>
    </nav>
  </section>
)

export default Header
