import React from "react" ;
import FeaturedProject from "../components/FeatureProject";
import Hero from '../components/Hero';
import MoreProjects from "../components/MoreProjects";
import ProfileCard from "../components/ProfileCard";
function Home(){
return(
    <div>
        <Hero />
        <ProfileCard />
        <FeaturedProject />
        <MoreProjects />
    </div>
);
}
 export default Home;