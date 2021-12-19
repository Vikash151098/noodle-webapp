import React from "react";
import ProgramList from "../components/ProgramList";
import ChannelList from "../container/ChannelList";
import Profile from "../container/Profile/Profile";
import TrendingShows from "../container/TrendingShows/TrendingShows";

function Home() {
  return (
    <>
      <h1>Program List | Props Example</h1>
      <div className="container">
        <ProgramList />
        <h1>Channel List | Class Comp and States Example</h1>
        <ChannelList></ChannelList>
        <br />
        <h2>Trending Shows List | Lists and Keys Example </h2>
        <TrendingShows title="Comedy Movies"></TrendingShows>
        <br />
        <h2>Profile Shows List | Two Way Data binding Example </h2>
        <Profile />
      </div>
    </>
  );
}

export default Home;
