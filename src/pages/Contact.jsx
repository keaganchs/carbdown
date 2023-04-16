import React from 'react';
import PersonCard from '../components/PersonCard';

function Contact() {
  return (
    <div className="Content">
      <h1>Contact us at ...</h1>
      <div className="Grid">
        <PersonCard firstName="Jackson" lastName="Vaughn" email="jvaughn@constructor.university" photo="" title="Project Lead" aboutMe={"Hi! I'm Jackson. Please reach out to me for any questions regarding our project."} />
        <PersonCard firstName="Keagan" lastName="Holmes" email="kholmes@constructor.university" photo="" title="Web and Sensor Development" aboutMe={"Hey, I'm Keagan. Feel free to contact me for anything regarding this website or our work on a CO2 drawdown verification sensor."} />
      </div>
    </div>
  );
}

export default Contact;