import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as echarts from 'echarts';
import * as moment from 'moment';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-complete-system',
  templateUrl: './complete-system.component.html',
  styleUrls: ['./complete-system.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CompleteSystemComponent implements OnInit {
  public LinechartOption: any;
  public GaugechartOption: any;
  start = new Date()
  end = new Date()


  constructor(private dataService : DataserviceService) { }
 
  ngOnInit(): void {
    this.dataService.getLastSevenDaysData().subscribe(data => {
      this.SpedoMeterGraph(data)
      this.initGraph(data)
      console.log(data);
      
    });

  }


  SpedoMeterGraph(data: any[]) {

    this.GaugechartOption = {
      grid: {
        left: '2%',
        right: '2%',
        bottom: '0%',
        containLabel: true,
      },


      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          radius: '100%',
          center: ['50%', '60%'],
          min: 0,
          max: 10,
          splitNumber: 10,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            color: 'inherit',
            distance: 20,
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            color: 'inherit'
          },
          data: [
            {
              value: 10
            }
          ]
        }
      ]
    };


  }


  initGraph(data: any[]) {
    const dateTo = moment().format('YYYY-MM-DD');
    let dateFrom = moment().subtract(7, 'days').startOf('day').format('DD')
    console.log(data);

    this.LinechartOption = {

      xAxis: {
        type: 'category',
        data: data.map(entry => entry.date)

      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [{
        data: data.map(entry => entry.value),
        type: 'line',
        symbolSize: 10,

      }]

    };

  }

  onChartClick(params: any) {
    const selectedData = {
      day: params.name,
      value: params.value
    };
    this.openPopup(selectedData);

  }


  openPopup(data: any) {
    // Implement popup logic here using Bootstrap modal or any other method
    // You can use Bootstrap modal to display the data
    console.log('Selected Data:', data);
  }

}
