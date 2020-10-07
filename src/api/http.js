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


export const getHomeStatistics = async () => {
  try {
    const res = await axios.get(`/api/statistic/overview`);
    return res.data;
  } catch (err) {
    throw err;
  }
}


export const getOpenPositions = async () => {
  try {
    const res = await axios.get("/api/position?bad_qty=0&owner=ARQ ADVISORS LLC")
    return res.data;
  } catch (err) {
    throw err;
  }
}

export const getInstances = async (parameters) => {
  const queryString = querystring.parse()
  for (const param in parameters) {
    queryString[param] = parameters[param]
  }
  try {
    console.log("test querystring", querystring.stringify(queryString))
    const res = await axios.get("/api/instance?" + querystring.stringify(queryString))
    return res.data;
  } catch (err) {
    throw err;
  }
}

export const getStatistics= async (parameters) => {
  const queryString = querystring.parse()
  for (const param in parameters) {
    queryString[param] = parameters[param]
  }
  try {
    const res = await axios.get("/api/statistic?" + querystring.stringify(queryString));
    return res.data;
  } catch (err) {
    throw err;
  }
}