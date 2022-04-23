const defaultState = {
	email: "",
	name: "",
	api: ""
}

const UPDATE_PROFILE = "UPDATE_PROFILE"

export const profileReducer = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_PROFILE:
			return {...state, ...action.payload}
		default:
			return state
	}
}

export const updateProfile = (payload) => ({type: UPDATE_PROFILE, payload})