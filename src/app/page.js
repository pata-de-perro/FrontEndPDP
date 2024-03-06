import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FirstCards from "./components/FirstCards";
import SecondCallToAction from "./components/SecondCallToAction";
import Functions from "./components/Functions";
import Tutorials from "./components/Tutorials";
import Comments from "./components/Comments";


export default function Home() {
  return (
    <main>
      <header>
        <Navbar />  
      
      </header>
      <div>
        <Hero />
        <FirstCards />
        <SecondCallToAction />
        <Functions />
        <Tutorials />
        <Comments />
        <Footer />
      </div>
    </main>
  );
}
