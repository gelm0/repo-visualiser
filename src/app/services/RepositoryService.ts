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

	private authConfig(): Object {
		return {headers: {Authorization: 'Bearer ' + this.authToken} };
	}

	private searchWordConfig(searchWord: string): Object {
		return {headers: {Authorization: 'Bearer ' + this.authToken}, params: {q: searchWord} }
	}

	public getRepositoryCommitCount(axios: NuxtAxiosInstance, owner: string): Promise<any>	 {
		return axios.get(this.UrlConstructor("/repos/:owner/:repo/stats/participation"), this.authConfig());
	}	

	public getRepositoryBranches(axios: NuxtAxiosInstance): Promise<any>	 {
		return axios.get(this.UrlConstructor("/repos/:owner/:repo/branches"), this.authConfig());
	}	

	public getRepositoryViews(axios: NuxtAxiosInstance): Promise<any>	 {
		return axios.get(this.UrlConstructor("/repos/:owner/:repo/traffic/views"), this.authConfig());
	}	

	public getRepositoryForks(axios: NuxtAxiosInstance): Promise<any>	 {
		return axios.get(this.UrlConstructor("/repos/:owner/:repo/forks"), this.authConfig());
	}	

	public searchFoRepositories(axios: NuxtAxiosInstance, searchWord: string): Promise<any>	 {
		return axios.get(this.UrlConstructor("/search/repositories"), this.searchWordConfig(searchWord));
	}	
}