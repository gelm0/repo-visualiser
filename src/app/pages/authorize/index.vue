<template>
<!-- Content left empty by intention -->
<!-- This page handles the redirect login flow -->
<div>
	HEJ
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import LoginService from '~/app/services/LoginService'
import Component from 'vue-class-component'

@Component
export default class RedirectPage extends Vue {

	async created() {
		const loginCode = this.$route.query.code;
		if (loginCode !== undefined) {
			/* Post auth parameter here */
			/* Then redirect to overview page */
			const loginService: LoginService = new LoginService();
			const resp = await loginService.requestGitHubToken(this.$axios, loginCode.toString());
			console.log("Response")
			// console.log(resp)
			//this.$router.push("vizualise")
		}
	}
}
</script>