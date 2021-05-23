import { combineReducers, createStore } from "redux";
import rocketsReducer from "./ducks/rockets";

function saveLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

function loadLocalStorage (){
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }  
}

export const rootReducer = combineReducers({
  rocketList: rocketsReducer,
});

const persistedLocalState = loadLocalStorage()
const store = createStore(rootReducer, persistedLocalState);

store.subscribe(()=>saveLocalStorage(store.getState()))

export default store;
