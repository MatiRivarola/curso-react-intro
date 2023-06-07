import { AiOutlineDelete } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

function TodoIcon(type) {
    return(
        <span
        className= {`icon icon-svg icon-${type}`}
        >
            <BiCheck/>
        </span>
    )
}

export {TodoIcon}
