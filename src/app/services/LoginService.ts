import ServiceConnector from '~/src/app/connector/ServiceConnector'

export default class LoginService {

	/* Login flow github app */

	/*
	* 1. Users are redirected to request their GitHub identity
	* 2. Users are redirected back to your site by GitHub
	* 3. Your app accesses the API with the user's access token
	*/

	async requestGitHubIdentity(): Promise<AxiosResponse> {
		ServiceConnector.get()
	}

	public login(): Promise<AxiosResponse> {

	}



}