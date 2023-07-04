import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAuthGuard } from './auth/guards/check-auth.guard';
import { LoginGuard } from './auth/guards/login.guard';
import { NotFoundComponent } from './panel/pages/not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo: 'ERP/panel', pathMatch: 'full'},
  {path:'ERP/panel', 
    loadChildren: () => import('../app/panel/panel.module').then(x => x.PanelModule), canActivate:[CheckAuthGuard]
  },
  {path:'ERP/auth', 
    loadChildren: () => import('../app/auth/auth.module').then(x => x.AuthModule), canActivate:[LoginGuard]
  },
  {path: '**', pathMatch: 'full', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
