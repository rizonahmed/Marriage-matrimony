import Banner from "./Banner";
import FeaturedMatches from "./FeaturedMatches";
import Galary from "./Galary";
import HowItWorks from "./HowItWork";
import Membership from "./Membership";
import PremiumCard from "./PremiumCard";
import Review from "./Review";
import Success from "./Success";

const Home = () => {
    return (
        <div>
      <Banner></Banner>
      <PremiumCard></PremiumCard>
      <HowItWorks></HowItWorks>
      <Success></Success>
      <Review></Review>
      <Membership></Membership>
      <FeaturedMatches></FeaturedMatches>


      <Galary></Galary>
      
        </div>
    );
};

export default Home;