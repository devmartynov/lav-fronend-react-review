import { combineReducers } from "redux";
import reducer from "./reducer";
import reducerCalc from "./reducerCalc";

export default combineReducers({
    reducer,
    reducerCalc
});
