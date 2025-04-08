import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AdminRoutingModule } from './admin-routing.module';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    TableModule,  // ✅ PrimeNG Table
    ButtonModule,  // ✅ PrimeNG Button
    FormsModule, // ✅ Import FormsModule for ngModel
  ]
})
export class AdminModule { }
