const defaultState = {
	api: "",
}

const ADD_API = "ADD_API"
const CLEAR_API = "CLEAR_API"

export const apiReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_API:
			return {...state, api: action.payload}
		case CLEAR_API:
			return defaultState
		default:
			return state
	}
}

export const addApiAction = (payload) => ({type: ADD_API, payload})

export const clearApiAction = () => ({type: CLEAR_API})



