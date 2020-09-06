<script lang="ts">
import Vue from 'vue';
import { mixins } from 'vue-class-component';
import { Line, mixins as chartMixins } from 'vue-chartjs'
import { ChartData } from 'chart.js';
import { Component, Prop} from 'vue-property-decorator';

 @Component({
    extends: Line,
  })
export default class LineGraph extends mixins(Vue, Line) {
  @Prop({default: undefined}) chartData!: ChartData;
	@Prop({default: undefined}) options?: Object;

	mounted(): void {
    this.renderChart(this.chartData, this.options);
  }
}
</script>