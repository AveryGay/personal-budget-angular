import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56', // Yellow
                '#ff6384', // Pink
                '#36a2eb', // Light Blue
                '#fd6b19', // Orange
                '#33FF6E', // Green
                '#FF3339', // Red
                '#FF33F0' // Violet
            ],
        }
    ],
    labels: []
};

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:4000/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
    this.createChart();
    });
  }

  createChart() {
    var ctx = document.getElementById("myChart");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
  }

}
