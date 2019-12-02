import { combineReducers } from "redux";
import reducerAuth from "./reducerAuth";
import reducerCalc from "./reducerCalc";

export default combineReducers({
    reducerAuth,
    reducerCalc
});
