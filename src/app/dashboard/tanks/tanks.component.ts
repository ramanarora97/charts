import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as echarts from 'echarts';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/modal/modal.component';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'tanks-system',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TanksComponent implements OnInit {
  LinechartOption:any
  constructor(
    private dataService: DataserviceService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.dataService.getLastSevenDaysData().subscribe((data) => {
      this.initGraph(data);
    });
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
        show: true,
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
