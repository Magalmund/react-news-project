import {createStore, combineReducers} from "redux";
import {apiReducer} from "./apiReducer"
import {emailReducer} from "./emailReducer";
import {profileReducer} from "./profileReducer";
import {postReducer} from "./postReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
	apiState: apiReducer,
	emailState: emailReducer,
	profileState: profileReducer,
	postsDataReducer: postReducer
})

export const store = createStore(rootReducer, composeWithDevTools());