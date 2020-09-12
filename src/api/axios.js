import axios from "axios";

const env = process.env.NODE_ENV;
let dev = env !== 'production';
const devPort = parseInt(5000, 10) || 8000;

// const ngrok = "https://1f004319.ngrok.io"

const devProxy = `http://localhost:${devPort}/`
const prodURL = `http://18f83dfe8e29.ngrok.io`

const baseURL = prodURL; 

export default axios.create({ baseURL });
