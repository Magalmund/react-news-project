import axios from "axios";

export default class PostService {
		static async getAllTopNews() {
			const { api } = localStorage
			const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api}`)
			return response;
    }

		static async searchAllTopNews(searchValue) {
			const { api } = localStorage
			const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=${searchValue}&apiKey=${api}`)
			return response;
    }

		static async updateProfileData(data) {
			return new Promise((resolve, reject) => {
        resolve({message: `Data updated: ${JSON.stringify(data)}`})
    })
    }
}
