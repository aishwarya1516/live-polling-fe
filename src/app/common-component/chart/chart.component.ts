import { Component, OnInit, Input } from '@angular/core';
import { ChartData } from 'ngx-chart';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartDataList: any;
  showChart: boolean = false;
  @Input() set chartData(value: any) {
    this.showChart = false;
    this.chartDataList = value;
    this.generateChartData();
    setTimeout(() => {
      this.showChart = true;
    }, 300);
  }
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

  
    
  }

  generateChartData() {
    this.chartValues = [];
    if(this.chartDataList.length > 0) {
      console.log('this.charData', this.chartDataList);
      this.chartDataList.map((item, index) => {
        this.chartValues.push({
          name: item.candidate[0].candidate,
          value: item.totalVote,
          color: this.chartColor[index]
        })
      })
    }
  }

}
