import {createStore, combineReducers} from "redux";
import {apiReducer} from "./storeRedux/apiReducer"
import {emailReducer} from "./storeRedux/emailReducer";
import {profileReducer} from "./storeRedux/profileReducer";
import {postReducer} from "./storeRedux/postReducer";
import { persistStore, persistReducer  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
	apiState: apiReducer,
	emailState: emailReducer,
	profileState: profileReducer,
	postsDataReducer: postReducer
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const rootRed = () => {
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return { store, persistor }
}
 
export default rootRed;
