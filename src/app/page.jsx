import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";
import Hero from "./components/landing/Hero";
import FirstCards from "./components/landing/FirstCards";
import SecondCallToAction from "./components/landing/SecondCallToAction";
import Functions from "./components/landing/Functions";
import Tutorials from "./components/landing/Tutorials";
import Comments from "./components/landing/Comments";


export default function Home() {
  return (
    <main>
      <header><Navbar /></header>
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
