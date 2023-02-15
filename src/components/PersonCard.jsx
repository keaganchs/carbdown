import React from "react"
import DefaultPortrait from "../assets/DefaultPortrait.png"

const PersonCard = ({firstName, lastName, email, photo, title, aboutMe}) => {

  return (
    <div className="PersonCard">
      {photo ? <img className="PersonCardPhoto" src={photo} alt={"Portrait photo of " + firstName + " " + lastName} /> : <img className="PersonCardPhoto" src={DefaultPortrait} alt="Just a smiling stick figure in place of an actual portrait."/>}
      <div className="PersonCardAboutMe">
        <h3>{firstName} {lastName}</h3>
        <p><i>{title}</i></p>
        <a href={"mailto:" + email}>{email}</a>
        <p>{aboutMe}</p>
      </div>
    </div>
  )
}

export default PersonCard;