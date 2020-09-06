//import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {NuxtAxiosInstance} from '@nuxtjs/axios'

export default class LoginService {

	/* Login flow github app */

	/*
	* 1. Users are redirected to request their GitHub identity
	* 2. Users are redirected back to your site by GitHub
	* 3. Your app accesses the API with the user's access token
	*/

	private oauthUrl: string = "";
	private clientId: string = "";
	private clientSecret: string = "";

	constructor() {
		if (process.env.CLIENT_ID !== undefined) {
			this.clientId = process.env.CLIENT_ID;
		}

		if (process.env.CLIENT_SECRET !== undefined) {
			this.clientSecret = process.env.CLIENT_SECRET;
		}

		if (process.env.OAUTH_URL !== undefined) {
			this.oauthUrl = process.env.OAUTH_URL;
		}
	}

	private deseraliseToken(serialisedData: string): string {
		const params = new URLSearchParams(serialisedData);
		console.log(serialisedData)
		const token = params.get('access_token');
		if (token !== null && token !== undefined) {
			return token;
		}
		return '';
	}

	private getLoginUrlParams(code: string): string {
		return new URLSearchParams({
				client_id: this.clientId,
				client_secret: this.clientSecret,
				code: code
		}).toString();
	}

	public requestGitHubToken(axios: NuxtAxiosInstance, code: string): Promise<any>	 {
		return axios.get("/api/redirect-oauth?" + this.getLoginUrlParams(code))
		.then( (response) => {
			return this.deseraliseToken(response.data);
		})
		.catch(function (error) {
      		console.log(error.response);
	 	});
	}
}