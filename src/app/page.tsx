import {Hero} from "./_components/hero";
import {About} from "./_components/about";
import {Services} from "./_components/services";
import {Testimonials} from "./_components/testimonials";
import {Team} from "./_components/team";
import { Infrastructure } from "./_components/infrastructure";

export default function Home(){
  return(
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Team/>
      <Infrastructure/>

    </main>
  )
}