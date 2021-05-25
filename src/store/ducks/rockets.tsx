import { IAction, IRocket } from "../../Interfaces";
const STOREROCKETS = "storeRockets";

export const storeRockets = (rockets: IRocket[]): IAction => ({
  type: STOREROCKETS,
  payload: rockets,
});

type RocketState = {
  rockets: IRocket[]
}

const initialState: RocketState = {
  rockets: [],
};

const rocketState = (state: RocketState = initialState, action: IAction): RocketState => {
  switch (action.type) {
    case STOREROCKETS:
      return { ...state, rockets: action.payload };
    default:
      return state;
  }
};

export default rocketState
