<script lang="ts">
import Vue from 'vue';
import { mixins } from 'vue-class-component';
import { Bar, mixins as chartMixins } from 'vue-chartjs'
import { ChartData } from 'chart.js';
import {Component, Prop} from 'vue-property-decorator';

/* We cannot extend the base chart class directly with only vue
 * and the component with Bar. This causes typescript errors that it
 * cannot find this.renderChart.
 * Thus we add a mixin so that we do not get the error
 */
class chartProps extends Vue {
	@Prop({default: undefined}) chartData?: ChartData;
	@Prop({default: undefined}) options?: Object;
}

 @Component({
    extends: Bar,
  })
export default class BarGraph extends mixins(chartProps, Bar) {
	
	mounted(): void {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    });
  }
}

</script>