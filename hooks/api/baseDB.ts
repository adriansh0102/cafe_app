import { env } from "@/constants/baseURL";
import axios from "axios";


const dataBase = axios.create({
    baseURL: env.baseURL,
    params:{}
})

export default dataBase;