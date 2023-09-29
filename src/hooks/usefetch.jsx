import axios from "axios";
import { useEffect, useReducer } from "react";
import { AppReducer } from "./reducer";

const initialVal = {
    loading: true,
    data: [],
    err: ''
}

const useFetch = () => {
    const [{ loading, data, err }, dispatch] = useReducer(AppReducer, initialVal)
    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=9&category=18&difficulty=medium&type=multiple")
            .then(resp => {
                dispatch({
                    type: "FETCH_SUCC",
                    payload: resp.data.results
                })
            }).catch(err => {
                dispatch({
                    type: "FETCH_ERR",
                    payload: err.message,
                })
            })

    }, []);

    return {
        loading,
        data,
        err
    }
}

export default useFetch;