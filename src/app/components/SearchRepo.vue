<template>
	<div class="container">
		<div class="input-group">
  		<input type="text" v-model="searchWord" class="form-control" placeholder="Github Repository" aria-label="Github Repository">
  		<div class="input-group-append">
    	<button class="btn btn-outline-secondary" type="button" @click="search">Search</button>
  	</div>
	</div>
	<b-list-group v-if="searchResults.length> 0">
  		<b-list-group-item button v-for="result in searchResults" :key="result.id" @click="chooseRepository(result.name, result.owner.login)"> 
			<div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ result.owner.login + "/" + result.name }}</h5>
    </div>

    <p class="mb-1">
      {{result.description}}
    </p>
  </b-list-group-item>
  	
  </b-list-group-item>
	</b-list-group>
	<b-list-group v-else>
  		<b-list-group-item>No search results</b-list-group-item>
	</b-list-group>
</div>
</template>


<script lang="ts">

import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator';
import RepositoryService from '~/app/services/RepositoryService';
import RepositoryParameters from '~/app/types/RepositoryParameters'

@Component
export default class SearchRepo extends Vue {

	@Prop({type: String, default: '', required: true}) authToken!: string;
	private repositoryService: RepositoryService;
	private searchWord: string = '';
	private searchResults: Array<any> = []

	mounted() {
		this.repositoryService = new RepositoryService(this.authToken);
	}

	async search(): Promise<any> {
		if(this.searchWord.length > 0) {
			const response = await this.repositoryService.searchFoRepositories(this.$axios, this.searchWord);
			this.searchResults = response.data.items;
		} else {
			this.searchResults = [];
		}

	}

	chooseRepository(repoName: string, repoOwner: string) {
		this.$emit("repositoryParams", new RepositoryParameters(repoName, repoOwner));
	}

}
</script>