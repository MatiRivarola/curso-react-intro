import { TiDeleteOutline } from "react-icons/ti";
import { BiCheck } from "react-icons/bi";

const iconTypes = {
    "check": (color) =>  <BiCheck 
    className="icon-svg" fill={color}/>,
    "delete": (color) => <TiDeleteOutline 
    className="icon-svg" fill={color}/>,
};

function TodoIcon( {type, color ,onClick } ) {
    return(
        <span
        className= {`icon  icon-${type}`}
        onClick = {onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon}
