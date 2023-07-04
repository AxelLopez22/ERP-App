import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { MaterialModule } from '../material/material.module';
import { PanelComponent } from './panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { MatTableComponent } from './shared/mat-table/mat-table.component';
import { SearchComponent } from './shared/search/search.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { SublevelMenuComponent } from './components/side-nav/sublevel-menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogsComponent } from './pages/logs/logs.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';


@NgModule({
  declarations: [
    PanelComponent,
    NavbarComponent,
    SideNavComponent,
    InicioComponent,
    PaginationComponent,
    MatTableComponent,
    SearchComponent,
    ProductosComponent,
    BodegasComponent,
    SublevelMenuComponent,
    DashboardComponent,
    FooterComponent,
    LogsComponent,
    ErrorModalComponent,
    NotificationsComponent,
    ProfileComponent,
    NotFoundComponent,
    BreadcrumsComponent,
    CatalogosComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PanelModule { }
