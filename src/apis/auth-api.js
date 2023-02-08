import axios from "../config/axios";

export const register = (input) => axios.post("auth/register", input);
export const login = (input) => axios.post("/auth/login", input);
export const userProfile = (input) => axios.post("/auth/userProfile", input);
