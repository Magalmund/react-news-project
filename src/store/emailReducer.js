const defaultState = {
	email: "",
}

const ADD_EMAIL = "ADD_EMAIL"

export const emailReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_EMAIL:
			return {...state, email: action.payload}
		default:
			return state
	}
}

export const addEmailAction = (payload) => ({type: ADD_EMAIL, payload})