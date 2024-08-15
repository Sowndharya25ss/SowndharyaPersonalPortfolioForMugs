import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import MyProjects from './Components/MyProjects'
import Testimonials from './Components/Testimonials'
import LetsDesign from './Components/LetsDesign'
import Footer from './Components/Footer'

import './App.css'

const App = () => (
  <div>
    <div className="main">
      <Header />
      <Home />
      <About />
      <Services />
      <MyProjects />
      <Testimonials />
      <LetsDesign />
    </div>
    <Footer />
  </div>
)

export default App
