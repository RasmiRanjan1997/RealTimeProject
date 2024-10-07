import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { NewTicketsComponent } from './pages/new-tickets/new-tickets.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { ReactiveFormsModule } from '@angular/forms';
import { NaPipe } from './shared/pipes/na.pipe';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    EmployeeComponent,
    TicketsComponent,
    NewTicketsComponent,
    DepartmentComponent,
    DashboardComponent,
    NaPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
