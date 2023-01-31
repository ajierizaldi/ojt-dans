import axios from "axios";

export const getData = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_DATA",
            payload: {
                loading: true,
                data: [],
                error: ""
            }
        });
        axios.get("http://localhost:3000/RegisteredStudentList", {
            timeout: 10000
        })
            .then((response) => {
                dispatch({
                    type: "GET_DATA",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMsg: false
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: "GET_DATA",
                    payload: {
                        loading: false,
                        data: [],
                        errorMsg: error.message
                    }
                });
            });
    }
}