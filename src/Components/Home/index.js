import './index.css'

const Home = () => (
  <section className="home-div">
    <div className="home-description">
      <p className="home-p">Hi I am</p>
      <h2 className="home-h2-orange">Muhammad Umair</h2>
      <h1 className="home-h1-bold">
        UI & UX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Designer
      </h1>
      <p className="home-des-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua, consectetur
        adipiscing elit,.
      </p>
      <button className="btn-hire-me" type="button">
        Hire Me
      </button>
    </div>
    <div className="home-profile">
      <a href="https://im.ge/i/Group-2-1.fsMFcX">
        <img
          src="https://i.im.ge/2024/08/13/fsMFcX.Group-2-1.png"
          alt="Group 2 1"
          border="0"
          className="profile-logo"
        />
      </a>

      <ul className="icon-div">
        <li>
          <a href="https://im.ge/i/Facebook-Negative-1.faatNT">
            <img
              className="icon"
              src="https://i.im.ge/2024/08/14/faatNT.Facebook-Negative-1.png"
              alt="Facebook Negative 1"
              border="0"
            />
          </a>
        </li>
        <li>
          <a href="https://im.ge/i/Twitter-Negative.fa7W4m">
            <img
              className="icon"
              src="https://i.im.ge/2024/08/14/fa7W4m.Twitter-Negative.png"
              alt="Twitter Negative"
              border="0"
            />
          </a>
        </li>
        <li>
          <a href="https://im.ge/i/Instagram-Negative.fa7VtW">
            <img
              className="icon"
              src="https://i.im.ge/2024/08/14/fa7VtW.Instagram-Negative.png"
              alt="Instagram Negative"
              border="0"
            />
          </a>
        </li>

        <li>
          <a href="https://im.ge/i/LinkedIn-Negative.fa7JTG">
            <img
              className="icon"
              src="https://i.im.ge/2024/08/14/fa7JTG.LinkedIn-Negative.png"
              alt="LinkedIn Negative"
              border="0"
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default Home
