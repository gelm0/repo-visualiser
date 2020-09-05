<template>
<div class="container">
	<div class="row">
		<div class="column">
			<bar-graph/>
		</div>
	</div>
	
	<div class="row">
		<div class="column">
			<bar-graph/>
		</div>
	</div>
</div>
</template>


<script lang="ts">
import Vue from 'vue';
import RepositoryService from '~/app/services/RepositoryService';
import SimplifiedRepository from '~/app/types/models/SimplifiedRepository';
import BarGraph from '~/app/components/BarGraph.vue'
import {Component, Prop} from 'vue-property-decorator';;
import VueCharts from 'vue-chartjs';

@Component({
  components: {BarGraph}
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