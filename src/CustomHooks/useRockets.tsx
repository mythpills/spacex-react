import { RootState } from "../Interfaces";
import { useSelector } from "react-redux";

export default function useRockets() {
  return useSelector((state: RootState) => state.rocketList.rockets);
}
