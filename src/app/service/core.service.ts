import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  
  sideNav: any = false;
  sideNavUpdated = new EventEmitter();

  constructor() {

  }

  getSideNavState() {
    return this.sideNavUpdated;
  }

  setSideNavState (state: any) {
    this.sideNav = state;
    this.sideNavUpdated.emit(this.sideNav);
  }
}
