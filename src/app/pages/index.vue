<template>
    	<div class="row">
    		<div class="col">
    			<div class="container-full">
    			</div>
	 		</div>
    		<div class="col my-auto">
    			<div class="card border-secondary pt-5" style="max-width: 36rem;">
	 				<login/>
	 			</div>
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