import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  fechaActual!: Date;
  constructor(){
    let fecha = new Date();
    this.fechaActual = fecha;
  }

  ngOnInit(): void {
    
  }
}
