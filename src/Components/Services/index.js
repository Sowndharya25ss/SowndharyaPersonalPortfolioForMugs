import './index.css'

const serviceList = [
  {
    id: 1,
    imgUrl: 'https://i.im.ge/2024/08/14/fslOya.Vector-2.png',
    alt: 'vector',
    title: 'UI/UX',
    description:
      'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
  },
  {
    id: 2,
    imgUrl: 'https://i.im.ge/2024/08/14/fsTXU9.Layer-1.png',
    alt: 'layer_1',
    title: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
  },
  {
    id: 3,
    imgUrl: 'https://i.im.ge/2024/08/14/fsXC9z.Group-18-1.jpeg',
    alt: 'layer_1',
    title: 'App Design',
    description:
      'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
  },

  {
    id: 4,
    imgUrl: 'https://i.im.ge/2024/08/14/fsl1zJ.Vector-3.png',
    alt: 'vector',
    title: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
  },
]

const Services = () => (
  <section className="services-div">
    <h1 className="services-h1">Services</h1>
    <p className="services-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <ul className="services-ul">
      {serviceList.map(i => (
        <li key={i.id} className="services-li">
          <img className="services-img" src={i.imgUrl} alt={i.alt} />
          <h1 className="services-li-h1">{i.title}</h1>
          <p className="services-li-p">{i.description}</p>
        </li>
      ))}
    </ul>
  </section>
)

export default Services
