<template>
	<div class="container">
		<div >
        <h1>Welcome</h1>
        This is a small Vue application that visualises you and other users repositories on Github. To use this application you need to login in via Github. Please click the login button to continue.
    	</div>
        <div class="mx-auto col-sm-8 col-md-6 hide-sm mt-5">
		<b-button @click="getLoginCode">Login</b-button>
	</div>
	</div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Login extends Vue {

	private loginUrl: string = '';
	private readonly clientId: string = '55b054e06b5f27004297';
	private readonly identiyRequestUrl: string = 'https://github.com/login/oauth/authorize';

	mounted() {
		const loginCode = this.$route.query.code;
		if (loginCode !== undefined) {
			/* Post auth parameter here */
			/* Then redirect to overview page */
		}
	}

	getLoginCode(): void {
		window.location.href = this.identiyRequestUrl + "?client_id=" + this.clientId;
	}
	/* Set this in an env property later */

}

</script>