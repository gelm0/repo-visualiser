<template>
<div class="container pt-5">
	<div class="row">
		<div class="col-md-4 mt-4">
			<search-repo :auth-token="authToken" @repositoryParams="setRepoParams($event)"/>
				<b-button @click=Test</b-button>
		</div>
		<div class="col-md-4">
			<line-graph :chart-data="commitData" :key="commitData.id"/>
		</div>
		<div class="col-md-4">
			<bar-graph :chart-data="hourlyCommitData" :key="hourlyCommitData.id"/>
		</div>
	</div>
</div>
</template>


<script lang="ts">
import Vue from 'vue';
import SearchRepo from '~/app/components/SearchRepo.vue'
import RepositoryService from '~/app/services/RepositoryService';
import SimplifiedRepository from '~/app/types/models/SimplifiedRepository';
import RepositoryParameters from '~/app/types/RepositoryParameters'
import BarGraph from '~/app/components/BarGraph.vue'
import LineGraph from '~/app/components/LineGraph.vue'
import {Component, Prop} from 'vue-property-decorator';

import VueCharts from 'vue-chartjs';

@Component({
  components: {BarGraph, LineGraph, SearchRepo}
})
export default class VisualisePage extends Vue {
	private authToken: string = ''
	private updated: number = 0;
	private repositoryParams = new RepositoryParameters("torvalds", "linux");
	private repositoryService: RepositoryService;
	private commitData: Object = { id: 0};
	private hourlyCommitData: Object = { id: 0 };

	mounted() {
		this.authToken = this.$route.params.token;
		this.repositoryService = new RepositoryService(this.authToken);
		this.updateChartData();
	}

	updateChartData(): void {
		this.updated += 1;
		this.constructCommitChart();
		this.constructHourlyCommitChart();
	}

	setRepoParams(repositoryParams: RepositoryParameters) {
		this.repositoryParams = repositoryParams;
	}

	private getCommitLabels(): Array<string> {
		const labels = [];
		for ( let i = 1; i < 53; i++ ) {
			labels.push("Week " + i);
		}
		return labels;
	}


	private initializeCommitMap(commitMap: Map<number, number>): Map<number, number> {
		for (let i = 0; i < 7; i++) {
			commitMap.set(i, 0);
		}
		return commitMap;
	}

	private constructHourlyCommitData(commitData: Array<any>): Array<any> {
		let commitMap: Map<number, number> = new Map();
		commitMap = this.initializeCommitMap(commitMap);
		for (let i = 0; i < commitData.length; i++) {
			const commit = commitData[i];
			const currentValue = commitMap.get(commit[0]);
			commitMap.set(commit[0], currentValue + commit[2])
		}
		const returnArray: Array<number> = Array.from(commitMap.values());
		const sundayCommits = returnArray.shift();
		returnArray.push(sundayCommits);
		return returnArray;
	}

	private getCommitData(): Promise<any> {
		const response = this.repositoryService.getRepositoryCommitCount(this.$axios, this.repositoryParams);
		return response;
	}

	private getHourlyCommitData(): Promise<any> {
		const response = this.repositoryService.getRepositoryCommitCountHourly(this.$axios, this.repositoryParams);
		return response;
	}

	async constructCommitChart(): Promise<any> {
		const commits = await this.getCommitData();
		this.commitData = {
      	labels: this.getCommitLabels(),
      	id: this.updated,
      	datasets: [
        	{
          	label: 'Commits per week, last year',
          	borderColor: 'rgba(255, 56, 96, 0.5)',
          	backgroundColor: 'rgba(255, 56, 96, 0.1)',
          	data: commits.data.all
        	}
      	]};
	}

	async constructHourlyCommitChart(): Promise<any> {
		const response = await this.getHourlyCommitData();
		const hourlyCommits = this.constructHourlyCommitData(response.data)
		this.hourlyCommitData = {
		labels: ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"],
		id: this.updated,
      	datasets: [
        	{
          	label: 'Commits per day, last week',
          	borderColor: 'rgba(255, 56, 96, 0.5)',
          	backgroundColor: 'rgba(255, 56, 96, 0.1)',
          	data: hourlyCommits
        	}
      	]};
	}

}

</script>