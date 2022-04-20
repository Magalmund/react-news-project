import {createStore, combineReducers} from "redux";
import {apiReducer} from "./apiReducer"
import {emailReducer} from "./emailReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
	api: apiReducer,
	email: emailReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());