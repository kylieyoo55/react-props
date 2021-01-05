import React from "react"
import Avatar from "./Avatar"
import Details from "./Details";

function Card(prop){
    console.log(prop);
    return (
        <div className="card">
        <div className="top">
        
        <h2 className="name">{prop.name}</h2>
        
       <Avatar img= {prop.img} alt={prop.alt} />
          </div>
          

<div className="bottom">
<Details DetailInfo={prop.tel} />
<Details DetailInfo={prop.email}/>
    
    </div>

          </div>
       
    )
}

export default Card;