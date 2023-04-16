import React from 'react';

const Home = () => {
  return (
    <div className="Content">
      <div className="VideoContainer">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QvfWI06mEFY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>

      <h1 style={{textAlign: "left", marginLeft: "5%"}}>The Problem</h1>
      <p>Anthropogenic emissions have already triggered catastrophic consequences on planet Earth. A sea level rise of up to 2 meters, and temperature increases of over 2 degrees have been projected for the year 2100 if human activities remain unchanged. Current sea levels have increased by 20 cm in the last 100 years, and its dramatic effects have changed countless lives, this is only 10% of what we will live in 80 years more, unless we act now. Many of earth's parameters lag the change of Earth's temperature, so even if we were to stop allemissions right now, sea levels and global temperature would increase until 2015 purely onthings that have already occurred</p>

      <h1 style={{textAlign: "left", marginLeft: "10%"}}>The Solution</h1>
      <p>Project Carbdown aims to research and implement <b><i>enhanced weathering</i></b>, a form of carbondioxide removal (CDR) used to combat anthropogenic climate change. By applying rock powder to large areas, CO2 is removed from the atmosphere and stored in the ground. With the imminent threat of climate change, governments have begun to implement a system called <b><i>carbon credits</i></b>, where removal of atmospheric CO2 is rewarded through financial compensation. Project Carbdown works with <b><i>local farmers</i></b> to research and implement a system whereby farmers can apply rock powder to crops in exchange for carbon credits, hence benefiting both the farmers and the environment. Additionally, this rock powder acts as a natural liming agent to neutralize soil acidity, making it <b><i>beneficial for both the crops and the soil</i></b>. As this system becomes more developed, enhanced weathering can be expanded to fight global warming on a large scale</p>

      <h1 style={{textAlign: "left", marginLeft: "15%"}}>The Science</h1>
      <p>CO2 is naturally removed from the atmosphere through chemical reactions involving rock weathering, particularly rocks containing silicate minerals. Enhanced weathering is a form of CDR whereby the speed of carbon removal by rock weathering is increased by grinding up rocks into a powder in order to increase the effective surface area. This powder is subsequently applied over large areas to allow for weathering to take place. This natural process regulates the amount of atmospheric CO2 on a <b><i>geological time-scale</i></b> (millions of years), and by increasing the weathering speed we can use this to effectively control CO2 levels on a <b><i>human time-scale</i></b> (tens of years), in order to combat Global Warming.</p>
    </div>
  );
}

export default Home;