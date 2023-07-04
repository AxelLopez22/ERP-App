import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  currentRoute: string;
  @Output() menuClicked = new EventEmitter<boolean>();
  usernameAuthenticated:string = '';

  constructor(private spinner: NgxSpinnerService, private router: Router, private httpService: LoginService){
    this.currentRoute = "Demo";
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.usernameAuthenticated = this.httpService.getUsernameAuthenticated();
  }

  logout(){
    this.spinner.show();
    setTimeout(() => {
      this.httpService.logout(localStorage.getItem('token')).subscribe((res => {
        this.spinner.hide();
        localStorage.removeItem('user-info');
        localStorage.removeItem('token');
        this.router.navigateByUrl("/ERP/auth");
      }));
    }, 2000);
  }

  profile(){
    this.router.navigateByUrl("/ERP/panel/profile")
  }
}
