import { Observable } from 'rxjs/Observable';
import { User } from './../models/user.model';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-test',
  templateUrl: './client-test.component.html',
  styleUrls: ['./client-test.component.css']
})
export class ClientTestComponent implements OnInit {

  data$: Observable<Array<User>>;

  constructor(private _svc: DataService)  { }

  ngOnInit() {
  }

  getData(): void {
    this.data$ = this._svc.getData();
  }

}
