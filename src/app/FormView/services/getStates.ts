import axios from "axios"

export const getStates = async () => {
    const { data } = await axios({
        url:'https://www.universal-tutorial.com/api/states/Peru',
        method:'GET',
        headers:{
            Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhZ3VzdGluYXNuOTVAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoid282Y1k3OFBZclU0RFVha0ZrVXNNbTktMWxROHZVb0ZORlZZVEZxcVlfbzVuSWUwczVWSFlGTmVUeDc0Z2ZXanJTQSJ9LCJleHAiOjE3MTkxOTQzOTN9.NbKuhIWWHSDdRa3yTkVMiyeTOY70CNObyUDtH2FEBSo`,
            Accept: "application/json"
        }
    }) as unknown as {data:[]}
    return data
}