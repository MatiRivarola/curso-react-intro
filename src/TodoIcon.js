import { AiOutlineDelete } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

const iconTypes = {
    "check": <BiCheck/>,
    "delete":<AiOutlineDelete/>,
};

function TodoIcon( {type} ) {
    return(
        <span
        className= {`icon icon-svg icon-${type}`}
        >
            {iconTypes[type]}
        </span>
    )
}

export {TodoIcon}
