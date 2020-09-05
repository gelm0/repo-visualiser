<template>
	<div class="container">
		<div class="input-group">
  		<input type="text" class="form-control" placeholder="Github Repository" aria-label="Github Repository">
  		<div class="input-group-append">
    	<button class="btn btn-outline-secondary" type="button">Button</button>
  	</div>
	</div>
	<ul class="list-group">
  		<li class="list-group-item">Cras justo odio</li>
  		<li class="list-group-item">Dapibus ac facilisis in</li>
  		<li class="list-group-item">Morbi leo risus</li>
  		<li class="list-group-item">Porta ac consectetur ac</li>
  		<li class="list-group-item">Vestibulum at eros</li>
	</ul>
</div>
</template>


<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class SearchRepo extends Vue {
	

}
</script>