import {NuxtAxiosInstance} from '@nuxtjs/axios'

export default class RepositoryService {

	private readonly API_URL: string = "https://api.github.com";
	private authToken: string;


	constructor(authToken: string) {
		this.authToken = authToken;
	}

	private UrlConstructor(url: string) {
		return this.API_URL + url;
	}

	public getUserRepositories(axios: NuxtAxiosInstance): Promise<any>	 {
		return axios.get(this.UrlConstructor("/user/repos"),  
			{ headers: {Authorization: 'Bearer ' + this.authToken} })
	}	
}