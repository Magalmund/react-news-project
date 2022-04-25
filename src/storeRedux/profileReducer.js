const defaultState = {
	emailProfile: "",
	nameProfile: "",
	apiProfile: ""
}

const UPDATE_PROFILE = "UPDATE_PROFILE"
const CLEAR_PROFILE = "CLEAR_PROFILE"

export const profileReducer = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_PROFILE:
			return {...state, ...action.payload}
		case CLEAR_PROFILE:
			return defaultState
		default:
			return state
	}
}

export const updateProfile = (payload) => ({type: UPDATE_PROFILE, payload})
export const clearProfile = () => ({type: CLEAR_PROFILE})