import React from "react";


function Avatar(prop){

    
    return(
        <img className="circle-img"
        src={prop.img}
        alt={prop.alt}
      />
    )
    
}
export default Avatar;