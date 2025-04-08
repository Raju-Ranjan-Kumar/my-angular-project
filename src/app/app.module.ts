import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { SidebarComponent } from './sidebar/sidebar.component';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from './customPipes/date.pipe';
import { HoverDirective } from './customDirective/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,  // ✅ PrimeNG Table
    ButtonModule,  // ✅ PrimeNG Button
  ],
  providers: [
    DatePipe, // ✅ Import instead of declaring
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
