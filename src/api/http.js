import querystring from "query-string"
import axios from "./axios"



// get all transactions subject to a query string
export const getTransactions = async (parameters) => {
    try {
        const queryString = querystring.parse()
        for (const param in parameters) {
            queryString[param] = parameters[param]
        }
        const res = await axios.get(`/api/transaction?` + querystring.stringify(queryString));
        return res.data;
    } catch (err) {
        throw err;
      }
}

// create a new transaction 
export const createTransaction = async (transaction_fields) => {
    try {
        const res = await axios.post(`/api/transaction`);
        return res.data;
      } catch (err) {
        throw err;
      }
}