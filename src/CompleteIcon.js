import React from "react";
import { TodoIcon } from "./TodoIcon";

import { BiCheck } from "react-icons/bi";

function CompleteIcon() {
    return (
        <TodoIcon
            type="check"
            color="gray"
        />
    )

}

export {CompleteIcon};