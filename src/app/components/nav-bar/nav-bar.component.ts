import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _service:AuthService,private _router:Router) { }

  onLogout=()=>{
    this._service.logout();
  }

  onGrid(){
    this._router.navigate(['/grid-view'])
  }

  onClick(){
    this._router.navigate(['/add-book']);
  }

  ngOnInit(): void {
  }

}
