import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as Highcharts from 'highcharts';
import { chart } from "highcharts";



@Component({
  selector: 'app-fill-graph',
  templateUrl: './fill-graph.component.html',
  styleUrls: ['./fill-graph.component.scss']
})
export class FillGraphComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const options: Highcharts.Options = {
      chart: {
        type: 'areaspline'
      },
      title: {
        text: 'Income and Expenses'
      },
      xAxis: {
        categories: ['01', '05', '10', '15', '20', '25', '30']
      },
      yAxis: {
        title: {
          text: 'Amount'
        },
        labels: {
          format: '{value}k'
        }
      },
      tooltip: {
        shared: true
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5
        }
      },
      series: [{
        name: 'Income',
        type: 'area',
        data: [
          [0, 0],
          [5, 1100],
          [10, 980],
          [15, 1700],
          [20, 2000],
          [25, 2250],
          [30, 3450]
        ],
        color: '#2947AA'
      }, {
        name: 'Expenses',
        type: 'area',
        data: [
          [0, 1900],
          [5, 3420],
          [10, 1900],
          [15, 1700],
          [20, 950],
          [25, 1900],
          [30, 900]
        ],
        color: '#f0a7c0'
      }]

    };

    Highcharts.chart('chartContainer', options);
  }

}


