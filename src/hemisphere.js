import React from "react";

import south from './Image/south.jpg'
import north from './Image/north.jpg'



    const Hemisphere= ({latitude})=>{
        const hemisphere= latitude>0?'Northern Hemisphere' : 'Southern Hemisphere'
        const picture = latitude>0 ? north : south
        if(picture=== north){
             return(
        <div className="north">
            <div className="inner">
            <img src={picture} alt="" />
            </div>
            <h1> {hemisphere} </h1>
        </div>
    )

        }
        else{
             return(
        <div className="south">
            <div className="inner">
            <img src={picture} alt="" />
            </div>
            <h1> {hemisphere} </h1>
        </div>
    )
        }
   
}
export default Hemisphere