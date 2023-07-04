import { Component, Input, OnInit } from '@angular/core';
import { NotificationModel } from '../../models/models';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() notifications: NotificationModel = {
    nombre: '',
    descripcion: '',
    tiempo: 0
  } 

  constructor(){}

  ngOnInit(): void {
    
  }
}
