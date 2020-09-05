<template>
<div class="container pt-5">
	<div class="row">
		<div class="col-md-4 mt-4">
			<search-repo/>
		</div>
		<div class="col-md-4">
			<bar-graph/>
		</div>
		<div class="col-md-4">
			<bar-graph/>
		</div>
	</div>

	<div class="row justify-content-end">
		<div class="col-md-4">
			<bar-graph/>
		</div>
		<div class="col-md-4">
			<bar-graph/>
		</div>
	</div>
</div>
</template>


<script lang="ts">
import Vue from 'vue';
import SearchRepo from '~/app/components/SearchRepo.vue'
import RepositoryService from '~/app/services/RepositoryService';
import SimplifiedRepository from '~/app/types/models/SimplifiedRepository';
import BarGraph from '~/app/components/BarGraph.vue'
import {Component, Prop} from 'vue-property-decorator';;
import VueCharts from 'vue-chartjs';

@Component({
  components: {BarGraph, SearchRepo}
})
export default class VisualisePage extends Vue {
//@Prop({type: String, required: true}) token!: string; 
private token: string = ''

	created() {
		this.token = this.$route.params.token;
		console.log("Hit visualise page")
		console.log(this.token)
	}


	getUserData() {
		const service = new RepositoryService(this.token);
		const data = service.getUserRepositories(this.$axios);
		console.log(data);
	}

}


</script>