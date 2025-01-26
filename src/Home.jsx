import Banner from "./Banner";
import Galary from "./Galary";
import HowItWorks from "./HowItWork";
import PremiumCard from "./PremiumCard";
import Success from "./Success";

const Home = () => {
    return (
        <div>
      <Banner></Banner>
      <PremiumCard></PremiumCard>
      <HowItWorks></HowItWorks>
      <Success></Success>
      <Galary></Galary>
      
        </div>
    );
};

export default Home;