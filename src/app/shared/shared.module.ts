import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router'
import { SharedService } from './services/shared.service'
@NgModule({
  declarations: [
    SidebarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    SharedService
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
