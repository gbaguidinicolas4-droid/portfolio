
import Navbar from "@/components/layout/Navbar" ;
import Hero from "@/components/section/Hero" ;
import About from "@/components/section/About";
import Comment from "@/components/section/Comments";
import Projects from "@/app/Projects/page";
import Certifications from "@/components/section/Certifications";
import Journey from "@/components/section/Journey" ;
import Footer from "@/components/layout/Footer" ;
export default function Home() {
  return(
  <section>
    <Navbar/>
    <Hero/>
    <About/>
      <Journey/>

    <Comment/>
    
  
    <Footer/>
  </section>
  )
}
