const defaultState = {
	email: "",
}

const ADD_EMAIL = "ADD_EMAIL"
const CLEAR_EMAIL = "CLEAR_EMAIL"

export const emailReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_EMAIL:
			return {...state, email: action.payload}
		case CLEAR_EMAIL:
			return defaultState
		default:
			return state
	}
}

export const addEmailAction = (payload) => ({type: ADD_EMAIL, payload})
export const clearEmailAction = () => ({type: CLEAR_EMAIL})