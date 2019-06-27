import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataService } from "../service/DataService";
import { Satellites, Astronauts } from "../service/dataproperties";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/timer'

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

  alive = true;

  constructor(private dataService: DataService) {
    Observable.timer(0, 2000)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.dataService.GetIss().subscribe((data: Satellites) =>
          this.satellites = data
        )
      });
      // this.satellites.velocity.toFixed(2);
      // this.satellites.altitude.toFixed(2);
  }

  public ngOnInit() {
    this.fetchIssPosition();
  }

  public fetchIssPosition() {
    this.dataService
      .GetIss<Astronauts>()
      .subscribe((data: Astronauts) => {
        this.astronauts = data;
      },
        error => () => {
          console.log(error);
        });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
