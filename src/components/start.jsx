/* eslint-disable react/prop-types */
const Start = ({ handleSub }) => {
    return (<form className="w-9/12 mt-5 h-3/6 m-auto text-center border" onSubmit={handleSub}  >
        <input
            type="text"
            name="user"
            placeholder="enter user name"
            className="mt-5 p-2 w-1/2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xl focus:ring-blue-500 focus:border-blue-500"
            required />
        <div>
            <button className="p-2 m-2 w-24 rounded-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300">play</button>
        </div>
    </form>);
}

export default Start;