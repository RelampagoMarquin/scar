import React, { useEffect, useReducer, useState } from "react";
import api from "../../services/api";
import Answers from "./answer/answer";
import Question from "./question/question";

interface Question{
    user: string;
}

interface Answer{
    user: { name: string };
}


export function Best() {

    return(
    <div>
        <p> id usuario {}</p>
        <p></p>

    </div>
       
    )
}

export default Best