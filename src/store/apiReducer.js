const defaultState = {
	api: "",
}

const ADD_API = "ADD_API"

export const apiReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_API:
			return {...state, api: action.payload}
		default:
			return state
	}
}

export const addApiAction = (payload) => ({type: ADD_API, payload})


