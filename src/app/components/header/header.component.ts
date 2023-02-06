import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean = false;
  sideNav: Boolean | undefined;

  constructor(private oidcSecurityService: OidcSecurityService, private router: Router, private coreService: CoreService) { }

  ngOnInit(): void {
    this.oidcSecurityService.isAuthenticated$.subscribe(({isAuthenticated}) => {
      this.isAuthenticated=isAuthenticated;
    } )
  }
 
  setSideNavState() {
    this.sideNav = !this.sideNav;
    this.coreService.setSideNavState(this.sideNav);
  }

  login(){
    this.oidcSecurityService.authorize();
    this.navigateTo();
  }

  logoff(){
    this.oidcSecurityService.logoffAndRevokeTokens();
    this.oidcSecurityService.logoffLocal();
  }

  navigateTo(){
    this.router.navigateByUrl("/callback")
  }

}
