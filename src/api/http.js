import querystring from "query-string"
import axios from "./axios"


// login route
export const login = async (username, password) => {
  try {
    const body = {
      username:username,
      password:password
    }
    const res = await axios.post(`/api/login`, body );
    if (res.data.jwt) {
      console.log("this was set")
      sessionStorage.setItem("jwt", res.data.jwt)
    }
    return res.data;
  } catch (err) {
    return {"error" :"incorrect username or password"}
  }
}

// register route
export const register = async (username, email, password) => {
  try {
    const body = {
      username:username,
      email:email,
      password:password
    }
    const res = await axios.post(`/api/register`, body );
    return res.data;
  } catch (err) {
    throw err;
  }
}


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
    const res = await axios.get("/api/transaction?min_open_qty=0.000000001&owner")
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


export const getStatisticsRange = async (parameters) => {
  const queryString = querystring.parse()
  for (const param in parameters) {
    queryString[param] = parameters[param]
  }
  try {
    const res = await axios.get("/api/statistic/range?" + querystring.stringify(queryString));
    return res.data;
  } catch (err) {
    throw err;
  }
} 