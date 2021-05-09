import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service'
import { StatisticsResponse } from '../../interfaces/statisticsResponse'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  statistics: StatisticsResponse = {
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0
  }
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCoronaStatistics();
  }

  getCoronaStatistics(): void {
    this.dashboardService.getCoronaStatistics().subscribe((data: any) => {
      this.statistics = { ...data }
      console.log(this.statistics)
    });  
    
  }

}
