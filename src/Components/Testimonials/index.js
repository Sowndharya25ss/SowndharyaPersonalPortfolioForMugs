import './index.css'

const Testimonials = () => (
  <section className="testimonials-div">
    <h1 className="testimonials-h1">Testimonials</h1>
    <p className="testimonials-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <div className="testimonial-div">
      <li className="testimonial-li">
        <a href="https://im.ge/i/Ellipse-10-1.fIsLIx">
          <img
            className="testimonial-img"
            src="https://i.im.ge/2024/08/15/fIsLIx.Ellipse-10-1.png"
            alt="Ellipse 10 1"
            border="0"
          />
        </a>
        <div>
          <q className="quote">
            <p className="testimonial-p">
              Lorem ipsum dolor sit amet consectetur. In enim cursus odio
              accumsan. Id leo urna velit neque mattis id tellus arcu
              condimentum. Augue dictum dolor elementum convallis dignissim
              malesuada commodo ultrices.
            </p>
          </q>
          <h1>Name</h1>
          <p>CEO</p>
        </div>
      </li>
    </div>
    <div className="carousel-div">
      <svg className="each-carousel">
        <rect width="35" height="10" rx="5" ry="5" fill="#D9D9D9" />
      </svg>
      <svg className="each-carousel">
        <rect width="35" height="10" rx="5" ry="5" fill="#FD6F00" />
      </svg>
      <svg className="each-carousel">
        <rect width="35" height="10" rx="5" ry="5" fill="#D9D9D9" />
      </svg>
      <svg className="each-carousel">
        <rect width="35" height="10" rx="5" ry="5" fill="#D9D9D9" />
      </svg>
    </div>
  </section>
)

export default Testimonials
