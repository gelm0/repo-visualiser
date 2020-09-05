<template>
    	<div class="card shadow border-secondary pt-5" style="max-width: 36rem;">
		<div class="card-body">
        <h1 class="card-title">Welcome</h1>
        This is a small Vue application that visualises yous and other users repositories on Github. To use this application you need to login in via Github. Please click the login button to continue.
    	</div>
        <div class="mx-auto col-sm-8 col-md-6 hide-sm mt-5">
		<b-button block class="mb-3 login-button" variant="outline-secondary" @click="redirectToGithubLogin">Go to Github Login</b-button>
	</div>
	</div>
</div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Login extends Vue {

	private readonly clientId: string | undefined = process.env.CLIENT_ID
	private readonly identityRequestUrl: string | undefined = process.env.REQUEST_CODE_URL;

	redirectToGithubLogin(): void {
		window.location.href = this.identityRequestUrl + "?client_id=" + this.clientId;
	}
}

</script>