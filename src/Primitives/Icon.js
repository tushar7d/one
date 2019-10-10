import React from "react";
import { IconContext } from "react-icons";

let Icon = (props)=>{
    return(
<IconContext.Provider value={props.value}>
    {props.children}
</IconContext.Provider>
);
}
export default Icon
