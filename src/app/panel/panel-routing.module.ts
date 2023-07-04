import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';

const routes: Routes = [
  {path:'', redirectTo: 'ERP/panel', pathMatch: 'full'},
  {path:'', component: PanelComponent ,children: [
    {path:'dashboard', component:DashboardComponent, data: { breadcrumb: {titulo : 'Dashboard'}}},
    {path: 'catalogos', component: CatalogosComponent, data: {breadcrumb: {titulo : 'Catalogos'}}},
    {path:'productos', component:ProductosComponent ,children:[
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path:'list', component:BodegasComponent, data: { breadcrumb: {titulo : 'Lista Productos'}}}
    ]},
    //{path:'productos/list', component:BodegasComponent, data: { breadcrumb: {titulo : 'Lista'}}},
    {path:'bodegas', component: BodegasComponent, data: { breadcrumb: {titulo : 'Bodegas'}}},
    {path: 'profile', component: ProfileComponent, data: { breadcrumb: {titulo : 'Perfil'}}}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
