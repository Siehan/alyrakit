import Navigation from "./Navigation";
import Header from "./Header";
import Features from "./Features";
import ListFeatures from "./ListFeatures";
import Sample from "./Sample";
import Pricing from "./Pricing";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Features />
        <ListFeatures />
        <Sample />
        <Pricing />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
