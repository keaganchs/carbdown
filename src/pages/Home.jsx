import React from 'react';

function Home() {
  return (
    <div className="Content">
      <h1>this is the homepage</h1>
      <p>Basalt rock has the potential to be used as a material for removing carbon dioxide from the atmosphere. The process involves reacting the gas with crushed basalt to form stable carbonates, effectively capturing and storing the CO2. This technology is still in the research and development phase, but has shown promise as a low-cost and scalable method for mitigating the effects of climate change by reducing the amount of carbon dioxide in the atmosphere.</p>

      <div className="VideoContainer">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QvfWI06mEFY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    </div>
  );
}

export default Home;