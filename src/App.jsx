import Faq from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Offerings from "./components/Offerings";
import Sponsors from "./components/Sponsors";
import Waitlist from "./components/Waitlist";
import WhoWeAre from "./components/WhoWeAre";

export default function App() {
  return (
    <>
      {/* <Head>
        <title>9jaGameFest - Join a large number of people and have fun</title>
        <meta
          name="description"
          content="9jagames fest brings to you all the fun that you deserve as you connect with so many others around and have a fun time."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className="h-screen w-screen ">
        <Nav />
        <Hero />
        <WhoWeAre />
        <Offerings />
        <Faq />
        <Sponsors />
        <Waitlist />
        <Footer />
      </main>
    </>
  );
}
