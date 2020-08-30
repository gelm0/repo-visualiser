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

		if (process.env.API_SECRET !== undefined) {
			this.clientSecret = process.env.API_SECRET;
		}

		if (process.env.OAUTH_URL !== undefined) {
			this.oauthUrl = process.env.OAUTH_URL;
		}
	}

	private getLoginUrlParams(code: string): string {
		return new URLSearchParams({
				client_id: this.clientId,
				client_secret: this.clientSecret,
				code: code
		}).toString();
	}

	async requestGitHubToken(axios: NuxtAxiosInstance, code: string): Promise<any>	 {
		if (this.oauthUrl !== undefined && this.clientId !== undefined && this.clientSecret !== undefined) {
			console.log("TEST")
			console.log(this.oauthUrl)
			console.log(this.getLoginUrlParams(code));
			const ret = await axios.get("/api/redirect-oauth?code=" + code)
			.catch(function (error) {
      			console.log(error.response);
		 	});
			console.log(ret);
			return ret
		}
	}
}