import { Component, OnInit } from '@angular/core';
import { INavbarData, SideNavItem } from '../../models/models';
import { navbarData } from './nav.data';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sideNavContent: INavbarData[] = []
  collapsed = false;
  //navData = navbarData;
  multiple: boolean = false;
  name: string = ""

  constructor(private httpService: LoginService){}

  ngOnInit(): void {
    this.name = this.httpService.getUsernameAuthenticated();
    this.CargarEstructura(this.name);
  }

  CargarEstructura(user: string){
    this.httpService.ObtenerEstructura(user).subscribe({
      next:(res:any) => {
        this.sideNavContent = res.data;
      },error:(err) => {
      },
    });
  }

  toggleSubmenu(event: Event,data: INavbarData): void {  
      event.preventDefault(); 
      data.expanded = !data.expanded;
      this.closeSubmenusExcept(data);

      // setTimeout(() => {
      //   data.expanded = false;
      // }, 300);
  }

  closeSubmenusExcept(data: any): void {
    this.sideNavContent.forEach(item => {
      if (item !== data) {
        item.expanded = false;
      }
    });
  }
}
