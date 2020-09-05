<template>
    <div class="container pt-5">
        <div class="row">
            <div class="my-auto mx-auto">
                <login/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from '~/app/components/Login.vue'
import Component from 'vue-class-component'

@Component({
  components: {Login}
})
export default class VizualiserPage extends Vue {

}
</script>