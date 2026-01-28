import React from "react";
import Banner from "./Banner";
import FeaturedArtworks from "../../component/FeaturedArtworks/FeaturedArtworks";
import TopArtist from "../../component/TopArtist/TopArtist";
import CommunityHighlight from "../../component/CommunityHighlight/CommunityHighlight";

const Home = () => {
  return (
    
     
      <div>
        <Banner />
      
       
        <FeaturedArtworks />

        <TopArtist/>
        <CommunityHighlight/>
      
    </div>
  );
};

export default Home;
