import { useState } from "react";
import Quiz from "./quiz";

/* eslint-disable react/prop-types */
const End = ({ name, score }) => {
    const [restart, setRestart] = useState(false)
    const handlRestart = () => {
        setRestart(true)
    }
    if (restart) return <Quiz />
    return (<div className="w-9/12 m-auto text-center mt-5">
        <div>
            <h1 className="text-2xl font-bold p-2">{name}</h1>
        </div>
        <div >
            your score: <span className="font-bold text-2xl">{score}</span>
        </div>
        <div>
            <button className="mt-2" onClick={handlRestart}>restart</button>
        </div>
    </div>);
}

export default End;