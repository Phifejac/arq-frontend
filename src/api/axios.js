import axios from "axios";

const env = process.env.NODE_ENV;
let dev = env !== 'production';
const devPort = parseInt(5000, 10) || 8000;
const ngrok = "http://d2adb0689844.ngrok.io"

const devProxy = `http://localhost:${devPort}/`
const prodURL = "https://arq-analytics-backend.herokuapp.com/"

const baseURL = prodURL;

export default axios.create({ baseURL });
