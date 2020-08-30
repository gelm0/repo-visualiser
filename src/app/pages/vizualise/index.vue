<template>
<div>
WELCOME TO MY HUMBLE ABODE
</div>
</template>


<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'


@Component
export default class VisualisePage extends Vue {

	created() {
		console.log("Hit visualise page")
	}

}


</script>