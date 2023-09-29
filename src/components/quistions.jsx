import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/usefetch";
import { shuffleArray } from "../hooks/shuffel";
import End from "./end";
import Form from "./form";
/* eslint-disable react/prop-types */
const Quistions = ({ setScore, player, score }) => {

    const [indx, setIndx] = useState(0)
    const [shuffel, setShuffel] = useState([])
    const [quizOver, setQuizOver] = useState(false);
    const { loading, data, err } = useFetch()
    console.log(loading)
    let qst = data ? data[indx] : null;
    // console.log(data)
    const choice = useRef([])
    useEffect(() => {
        const answers = qst ? [qst.correct_answer, ...qst.incorrect_answers] : [];
        setShuffel(shuffleArray(answers));
        choice.current = choice.current.slice(0, answers.length);

    }, [qst]);
    const handleClk = () => {
        const ansr = choice.current.find(el => el.checked);
        if (!ansr) return;
        if (ansr?.value === qst.correct_answer) setScore(pr => pr + 1)
        if (data.length - 1 === indx) setQuizOver(true)
        setIndx(prI => prI + 1)
        ansr.checked = false
    }
    if (quizOver) return <End name={player} score={score} />;

    return (<>
        {err && <div>{err}</div>}
        {qst && <> <Form player={player} qst={qst} shuffel={shuffel} choice={choice} /> </>}
        <div className="w-1/3 h-7 cursor-pointer text-white m-auto text-center mt-5 rounded bg-blue-800">
            <button onClick={handleClk}  >Next</button>
        </div>

    </>);
}

export default Quistions;