import { Hero } from './Hero'
import { About } from '../pages/About'
import { Counter } from '../pages/Counter'
import { Services } from '../pages/Services'
import { Portfolio } from '../pages/Portfolio'
import { Testimonials } from '../pages/Testimonials'
import { Blog } from '../pages/Blog'
import { Contact } from '../pages/Contact'

export const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Counter/>
      <Portfolio/>
      <Testimonials/>
      <Blog/>
      <Contact/>
    </>
  )
}
