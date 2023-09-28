import axios from "axios"

export const convertPromptFunction = () => {
   axios.post('/api/prompt');
}

export const getResultFunction = () => {
   axios.post('/api/result');
}