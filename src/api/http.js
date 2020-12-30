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
      console.log("SET", res.data.jwt)
      localStorage.setItem("jwt", res.data.jwt)
      localStorage.setItem("username", username)
      const jwt = await localStorage.getItem("jwt")
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
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const queryString = querystring.parse()
    for (const param in parameters) {
      queryString[param] = parameters[param]
    }
    const res = await axios.get(`/api/transaction?` + querystring.stringify(queryString), {headers : headers});
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

// create a new transaction 
export const createTransaction = async (transaction_fields) => {
  const headers = {
    "Authorization" : "Bearer " + await + localStorage.getItem("jwt")
  }
  try {
    const res = await axios.post(`/api/transaction`, transaction_fields, {headers : headers});
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

// update transaction 
export const updateTransaction = async (transaction_fields) => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const res = await axios.put(`/api/transaction`, transaction_fields, { headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

// delete transaction 
export const deleteTransaction = async (transaction_fields) => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const res = await axios.delete(`/api/transaction`, {params: transaction_fields, headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

export const getHomeStatistics = async () => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const res = await axios.get(`/api/statistic/overview`, { headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}


export const getLogs = async () => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const res = await axios.get(`/api/history`, { headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

export const getClients = async () => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const res = await axios.get(`/api/clients`, { headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

// delete client
export const deleteClient = async (info) => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const res = await axios.delete(`/api/clients`, { params: info, headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

// update client
export const updateClient = async (info) => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const res = await axios.put(`/api/clients`, info, { headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

// add client
export const addClient = async (info) => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const res = await axios.post(`/api/clients`, info, { headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}


export const getOpenPositions = async () => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  try {
    const res = await axios.get("/api/transaction?min_open_qty=0.000000001&owner", { headers : headers })
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

export const getInstances = async (parameters) => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  const queryString = querystring.parse()
  for (const param in parameters) {
    queryString[param] = parameters[param]
  }
  try {
    const res = await axios.get("/api/instance?" + querystring.stringify(queryString), { headers : headers })
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}

export const getStatistics= async (parameters) => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  const queryString = querystring.parse()
  for (const param in parameters) {
    queryString[param] = parameters[param]
  }
  try {
    const res = await axios.get("/api/statistic?" + querystring.stringify(queryString), { headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
}


export const getStatisticsRange = async (parameters) => {
  const headers = {
    "Authorization" : "Bearer " + await localStorage.getItem("jwt")
  }
  const queryString = querystring.parse()
  for (const param in parameters) {
    queryString[param] = parameters[param]
  }
  try {
    const res = await axios.get("/api/statistic/range?" + querystring.stringify(queryString), { headers : headers });
    return res.data;
  } catch (err) {
    if (err.response.status === 403) {
      window.location = "/auth/login"
    }
    throw err;
  }
} 