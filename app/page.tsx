
import Navbar from "@/components/layout/Navbar" ;
import Hero from "@/components/section/Hero" ;
import About from "@/components/section/About";
import Expertise from "@/components/section/Expertise";
import Projects from "@/components/section/Projets";
import Certifications from "@/components/section/Certifications";
import Journey from "@/components/section/Journey" ;
import Footer from "@/components/layout/Footer" ;
export default function Home() {
  return(
  <section>
    <Navbar/>
    <Hero/>
    <About/>
    <Expertise/>
    <Projects/>
    <Certifications/>
    <Journey/>
    <Footer/>
  </section>
  )
}
