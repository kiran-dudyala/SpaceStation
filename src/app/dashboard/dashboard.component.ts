import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataService } from "../service/DataService";
import { Satellites, Astronauts } from "../service/dataproperties";
import { strictEqual } from 'assert';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss', './dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DataService]
})
export class DashboardComponent implements OnInit {
  public values: any[];
  public satellites = new Satellites();
  public astronauts = new Astronauts();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchIssPosition();
  }

  public FetchIssData() {
    setTimeout(
      function() {
        this.fetchIssPosition();
      }, 5000);
  }

  public fetchIssPosition() {
    this.dataService
      .GetIss<Satellites>()
      .subscribe((data: Satellites) => { this.satellites = data; },
        error => () => {
          console.log(error);
        });
  }
}
