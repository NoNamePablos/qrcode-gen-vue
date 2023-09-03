import axios from "axios";
import {defaultApi} from "@/constants/const";
const instance = axios.create({
    baseURL: defaultApi,
});
export default  instance;