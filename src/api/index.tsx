import axios from "axios";

export const fetchRockets = async () => {
  const rocketsResponse = await axios.get(
    "https://api.spacexdata.com/v4/rockets"
  );
  return rocketsResponse;
};
