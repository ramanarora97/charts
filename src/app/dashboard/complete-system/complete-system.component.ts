import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as echarts from 'echarts';
import * as moment from 'moment';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { EChartsOption } from 'echarts';
import { take } from 'rxjs';
import { ModalComponent } from 'src/app/modal/modal.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-complete-system',
  templateUrl: './complete-system.component.html',
  styleUrls: ['./complete-system.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CompleteSystemComponent implements OnInit {
  public LinechartOption: any;
  public GaugechartOption: any;
  start = new Date();
  end = new Date();
  graphData: any;

  constructor(
    private dataService: DataserviceService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.dataService.getLastSevenDaysData().subscribe((data) => {
      this.SpedoMeterGraph(data);
      this.initGraph(data);
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
                [1, '#fd666d'],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: 'auto',
            },
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 3,
              color: '#999',
            },
          },
          axisLabel: {
            color: 'inherit',
            distance: 20,
            fontSize: 20,
          },
          detail: {
            valueAnimation: true,
            color: 'inherit',
          },
          data: [
            {
              value: 10,
            },
          ],
        },
      ],
    };
  }

  initGraph(data: any[]) {
    const last7DaysData = this.getLast7Days();
    console.log(last7DaysData);

    this.LinechartOption = {
      grid: {
        left: '2%',
        right: '2%',
        bottom: '0%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: last7DaysData,
        show: false,
        onZero: false,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        show: false,
      },

      series: [
        {
          radius: '100%',
          center: ['50%', '60%'],
          data: data.map((entry) => entry.value),
          type: 'line',
          symbolSize: 10,
        },
      ],
    };
    console.log(data.map((entry) => entry.value));
  }

  onChartClick(data: any) {
    this.modalService.show(ModalComponent, {
      class: 'modal-lg',
      keyboard: false,
    });
    console.log('Selected Data:', data);
  }

  getLast7Days(): string[] {
    const last7DaysData: string[] = [];
    const currentDate = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - i);
      const formattedDate = this.formatDate(date);
      last7DaysData.push(formattedDate);
    }

    return last7DaysData;
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    return day;
  }

}
