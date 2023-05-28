import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const container = this.elementRef.nativeElement.querySelector('#donut-chart');

    const options: Highcharts.Options = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
      },
      title: {
        text: undefined,
      },
      plotOptions: {
        pie: {
          innerSize: '70%',
          dataLabels: {
            enabled: false,
          },
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Expenses',
          data: [
            { name: 'Shopping', y: 19 },
            { name: 'Workspace', y: 27 },
            { name: 'Food', y: 27 },
            { name: 'Entertainment', y: 27 },
          ],
          colors: ['#2f4283', '#435fc0', '#8e9ed4', '#c6cfeb'],
          showInLegend: false,
        },
      ],
    };

    Highcharts.chart(container, options);
  }
}
  // renderChart(): void {
  //   const options: Highcharts.Options = {
  //     chart: {
  //       type: 'pie',
  //     },
  //     title: {
  //       text: 'All Expenses',
  //       align: 'center',
  //     },
  //     tooltip: {
  //       pointFormat: '<b>{point.percentage:.1f}%</b>',
  //     },
  //     plotOptions: {
  //       pie: {
  //         allowPointSelect: true,
  //         cursor: 'pointer',
  //         dataLabels: {
  //           enabled: true,
  //           format: '<b>{point.name}</b>: {point.percentage:.1f} %',
  //           distance: -10,
  //           style: {
  //             fontWeight: 'bold',
  //             fontSize: '20px',
  //             color: 'white',
  //             textOutline: '0px',
  //           },
  //         },
  //         showInLegend: true,
  //       },
  //     },
  //     legend: {
  //       layout: 'vertical',
  //       align: 'right',
  //       verticalAlign: 'middle',
  //       itemMarginTop: 10,
  //       itemMarginBottom: 10,
  //     },
  //     colors: ['#2f4283','#435fc0', '#8e9ed4', '#c6cfeb'],
  //     series: [{
  //       type: 'pie',
  //       size: '100%',
  //       innerSize: '70%',
  //       name: 'All Expenses',
  //       colorByPoint: true,
  //       data: [
  //         { name: 'Shopping', y: 19 },
  //         { name: 'Workspace', y: 27 },
  //         { name: 'Food', y: 27 },
  //         { name: 'Entertainment', y: 27 }
  //       ]
  //     }]

  //   };









