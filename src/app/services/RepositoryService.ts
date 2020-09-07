import {NuxtAxiosInstance} from '@nuxtjs/axios'
import RepositoryParameters from '~/app/types/RepositoryParameters'


export default class RepositoryService {

	private readonly API_URL: string = "https://api.github.com";
	private authToken: string;

	constructor(authToken: string) {
		this.authToken = authToken;
	}

	private UrlConstructor(url: string) {
		return this.API_URL + url;
	}

	private authConfig(): Object {
		console.log(this.authToken)
		return {headers: {Authorization: 'Bearer ' + this.authToken} };
	}

	private searchWordConfig(searchWord: string): Object {
		return {headers: {Authorization: 'Bearer ' + this.authToken}, params: {q: searchWord, per_page: 10} }
	}

	public getRepositoryCommitCount(axios: NuxtAxiosInstance, params: RepositoryParameters): Promise<any>	 {
		return axios.get(this.UrlConstructor("/repos/" + params.owner +"/" + params.repository + "/stats/participation"), this.authConfig());
	}	

	public getRepositoryCommitCountHourly(axios: NuxtAxiosInstance, params: RepositoryParameters): Promise<any>	 {
		return axios.get(this.UrlConstructor("/repos/"  + params.owner +"/" + params.repository + "/stats/punch_card"), this.authConfig());
	}	

	public searchFoRepositories(axios: NuxtAxiosInstance, searchWord: string): Promise<any>	 {
		return axios.get(this.UrlConstructor("/search/repositories"), this.searchWordConfig(searchWord));
	}	
}