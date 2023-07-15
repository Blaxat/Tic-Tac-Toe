import React from "react";



function Square(turn){

    return(
        <div onClick = {turn.clicked} className="square">
            <h4>{turn.value}</h4>
        </div>
    )
};

export default Square;