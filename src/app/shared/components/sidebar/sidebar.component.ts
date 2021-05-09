import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sharedService:SharedService, private router:Router) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.sharedService.logOut();
    this.router.navigate(['/auth/login'])
  }

}
