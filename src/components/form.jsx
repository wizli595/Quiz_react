/* eslint-disable react/prop-types */
const Form = ({ player, qst, shuffel, choice }) => {
    return (<div className="w-9/12 m-auto mt-5 border p-5">
        <h1 > user : <span className="text-xl">{player}</span></h1>
        <h3 className="text-center p-2" >{qst.question}</h3>
        <div className="flex justify-center justify-items-center p-2">
            {
                shuffel.map((el, i) => {
                    return <div key={i} className="mr-3 text-center">
                        <input
                            type="radio"
                            name="answer"
                            ref={(el) => (choice.current[i] = el)}
                            value={el}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="answer" className="p-2">{el}</label>
                    </div>

                })
            }

        </div>
    </div>);
}

export default Form;