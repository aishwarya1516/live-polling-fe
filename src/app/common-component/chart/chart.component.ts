import { Component, OnInit, Input } from '@angular/core';
import { ChartData } from 'ngx-chart';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartData: any;
  chartValues = [];
  pieView = {
    height:300,
    width:300,
    radius:90
  }
  chartOptions = {
    showLegend: true,
    legendTitle: 'Total'
  }

  chartColor = ["#61b15a","#adce74" ,"#fff76a", "#ffce89", "#d8f8b7"]
  constructor() { }

  ngOnInit(): void {
  this.generateChartData();
    
  }

  generateChartData() {
    if(this.chartData.length > 0) {
      this.chartData.map((item, index) => {
        this.chartValues.push({
          name: item.candidate[0].candidate,
          value: item.totalVote,
          color: this.chartColor[index]
        })
        console.log('this.chartValues', this.chartValues);
      })
    }
  }

}
