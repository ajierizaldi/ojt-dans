import axios from "axios";

export const getData = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_DATA",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });
        axios({
            method: "GET",
            url: "http://localhost:5000/matakuliah",
            timeout: 5000
        })
            .then((response) => {
                dispatch({
                    type: "GET_DATA",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: "GET_DATA",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                });
            });
    }
}