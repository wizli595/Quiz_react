import { useState } from "react";
import Quistions from "./quistions";
import Start from "./start";

const Quiz = () => {
    const [score, setScore] = useState(0)
    const [plyr, setPlyr] = useState('')
    const handleSub = (e) => {
        e.preventDefault();
        setPlyr(e.target.user.value)
    }
    return (<>
        {!plyr && <Start handleSub={handleSub} />}
        {plyr && <Quistions setScore={setScore} player={plyr} score={score} />}

    </>);
}

export default Quiz;