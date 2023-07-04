import { ParseError } from '@angular/compiler';
import { Component } from '@angular/core';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  error(){
    throw new TypeError();
  }
}
