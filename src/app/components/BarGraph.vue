<script lang="ts">
import Vue from 'vue';
import { mixins } from 'vue-class-component';
import { Bar, mixins as chartMixins } from 'vue-chartjs'
import { ChartData } from 'chart.js';
import { Component, Prop } from 'vue-property-decorator';

 @Component({
    extends: Bar,
  })
export default class BarGraph extends mixins(Vue, Bar) {
	@Prop({default: undefined}) chartData!: ChartData;
	@Prop({default: undefined}) options?: Object;

	mounted(): void {
    	this.renderChart(this.chartData, this.options);
	}
}
</script>