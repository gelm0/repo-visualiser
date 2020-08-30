<template>
	<div class="container pt-5">
    	<div class="mx-auto col-sm-8 col-md-6 hide-sm">
	 				<login/>
        	</div>
    	</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from '~/app/components/login.vue'
import Component from 'vue-class-component'

@Component({
  components: {Login}
})
export default class VizualiserPage extends Vue {


}
</script>