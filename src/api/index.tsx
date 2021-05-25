import axios from "axios";
const BASE_URL:string = process.env.REACT_APP_BASE_URL as string;
export const fetchRockets = async () => {
  const rocketsResponse = await axios.get(BASE_URL);
  return rocketsResponse;
};
