import './index.css'

const buttons = [
  {id: 1, text: 'All', css: 'projects-btn'},
  {id: 2, text: 'UI/UX', css: 'projects-btn'},
  {id: 3, text: 'Web Design', css: 'active-btn'},
  {id: 4, text: 'App Design', css: 'projects-btn'},
  {id: 5, text: 'Graphic Design', css: 'projects-btn'},
]

const projects = [
  {
    id: 1,
    imgUrl: 'https://i.im.ge/2024/08/14/fslRGL.Group-24.png',
    title: 'Web Design',
    description: 'AirCalling Landing Page Design',
  },
  {
    id: 2,
    imgUrl: 'https://i.im.ge/2024/08/14/fslk1J.Rectangle-27.png',
    title: 'Web Design',
    description: 'Business Landing Page Design',
  },
  {
    id: 3,
    imgUrl: 'https://i.im.ge/2024/08/14/fsrMp8.Rectangle-28.png',
    title: 'Web Design',
    description: 'Ecom Web Page Design',
  },
]

const MyProjects = () => (
  <section className="projects-div">
    <h1 className="projects-h1">My Projects</h1>
    <p className="projects-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <ul className="projects-btn-ul">
      {buttons.map(i => (
        <li className="projects-btn-li" key={i.id}>
          <button className={`${i.css}`} type="button">
            {i.text}
          </button>
        </li>
      ))}
    </ul>

    <ul className="projects-ul">
      {projects.map(i => (
        <li className="projects-li" key={i.id}>
          <img className="projects-img" alt={i.description} src={i.imgUrl} />
          <p className="project-li-p">{i.title}</p>
          <h1 className="projects-li-h1">{i.description}</h1>
        </li>
      ))}
    </ul>
  </section>
)

export default MyProjects
