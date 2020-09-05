<template>
<!-- Content left empty by intention -->
<!-- This page handles the redirect login flow -->
</template>

<script lang="ts">
import Vue from 'vue'

import LoginService from '~/app/services/LoginService';
import Component from 'vue-class-component';

@Component
export default class RedirectPage extends Vue {
	async created() {
		const loginCode = this.$route.query.code;
		if (loginCode !== undefined) {
			/* Post auth parameter here */
			/* Then redirect to overview page */
			const loginService: LoginService = new LoginService();
			const token = await loginService.requestGitHubToken(this.$axios, loginCode.toString())
				.then(function (response) {
					return response;
				});
			if (token !== undefined) {
				this.$router.push({name: 'visualise', params: {token: token}});	
			} else {
				this.$router.push({name: 'error'});
			}
		}
	}
}
</script>