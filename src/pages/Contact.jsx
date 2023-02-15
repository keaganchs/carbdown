import React from 'react';
import PersonCard from '../components/PersonCard';

function Contact() {
  return (
    <div className="Content">
      <h1>Contact us at ...</h1>
      <div className="PersonCardContainer">
        <PersonCard firstName="Keagan" lastName="Holmes" email="kholmes@constructor.university" photo="" title="The Man Who Knows How to Make a Website" aboutMe={"Hi! I'm Keagan."} />
      </div>
    </div>
  );
}

export default Contact;