import axios from "axios";

export default class PostService {

		static async getAll(limit = 10, page = 1) {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_limit: limit,
					_page: page
				}
			})
			return response;
		}

		static async getById(id) {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
			console.log(id);
			return response;
    }

    static async getCommentsByPostId(id) {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
			console.log(id);
			return response;
    }

		static async getAllTopNews() {
			console.log(localStorage)
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
