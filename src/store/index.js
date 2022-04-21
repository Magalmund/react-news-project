import {createStore, combineReducers} from "redux";
import {apiReducer} from "./apiReducer"
import {emailReducer} from "./emailReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
	apiState: apiReducer,
	emailState: emailReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());