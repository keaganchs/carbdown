import React from "react"

const Footer = ({title, date, content, ...props}) => {

  return (
    <div className={props.className ? "BlogPost " + props.className : "BlogPost"}>
      {props.disclaimer ? <h4>({props.disclaimer})</h4> : ""}
      <h1>{title}</h1>
      <h2>{date}</h2>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", margin:"10px"}}>
        <div>{content}</div>
        <div>{props.media ? props.media : ""}</div>
      </div>
      
    </div>
  )
}

export default Footer;