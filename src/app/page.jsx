import {
  Comments,
  FirstCards,
  Footer,
  Functions,
  Hero,
  Navbar,
  SecondCallToAction,
  Tutorials,
} from "@/components/landing";

export default function LandingPage() {
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
