import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Login, Token } from '../models/models';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { navbarData } from '../../panel/components/side-nav/nav.data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  

  constructor(private fb: FormBuilder, private spinner: NgxSpinnerService, private router: Router, private httpService: LoginService,
    private toastr: ToastrService){
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  Login(){
    let usuario: Login = {
      userName: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
   
    this.httpService.Login(usuario).subscribe({
      next:(res: any) => {
        if(res.isSuccess === true){
          this.Authenticate(res.data);
        } else {
          this.showAlert(res.isSuccess, res.message);
        }
      },error:(err: any) => {
        navigator.onLine ? this.showAlert(false, "Error al iniciar sesión") : Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          text: 'Se ha perdido la conexion a internet',
          width: '60%'
        });;
      },
    });
  }

  Authenticate(token: Token){
    this.httpService.Authenticate(token).subscribe({
      next:(res: any) => {
        if(res.isSuccess === true){
          this.spinner.show();
          this.httpService.saveToken(token.token);
          localStorage.setItem("user-info", JSON.stringify(res.data));
          setTimeout(()=>{
            this.spinner.hide()
            this.router.navigate(['ERP/panel/dashboard']);
          },1500)
        } else {
          this.showAlert(false, "Autenticacion fallida, Token no valido");
        }
      },error:(err) => {
        this.showAlert(false, "Error al autenticar usuario");        
      }
    });
  }

  showAlert(isSuccess:boolean,mensaje:string){
    isSuccess === true ? this.toastr.success(`${mensaje}`,"",{
        timeOut: 2000,
        closeButton: true,
        progressBar: true,
        progressAnimation: 'decreasing',
        easing: 'ease-in',
        easeTime: 300
      } ): this.toastr.error(`${mensaje}`,"",{
      timeOut: 2000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      easing: 'ease-in',
      easeTime: 300
    } )
  }
}
