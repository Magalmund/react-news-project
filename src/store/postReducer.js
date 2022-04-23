const defaultState = {
	search: "",
	articles: [],
	selectedArticle: null
}

const UPDATE_ARTICLES_DATA = "UPDATE_ARTICLES_DATA"

export const postReducer = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_ARTICLES_DATA:
			return {...state, ...action.payload}
		default:
			return state
	}
}

export const postsDataUpdate = (payload) => ({type: UPDATE_ARTICLES_DATA, payload})