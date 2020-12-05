import { Injectable } from '@angular/core';
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  activeTab: number;

  constructor(private location: Location) {
    this.activeTab - 1;

    this.examinePath();

    location.onUrlChange((url, state) => {
      this.examinePath();
    });
  }


  changeTab(tab): void {

    if (this.activeTab === tab)
      return;

    switch (tab) {
      case 1:
      default:
        this.activeTab = 1;
        window.history.pushState(null, "Tab1", "/all-items");
        break;
      case 2:
        this.activeTab = 2;
        window.history.pushState(null, "Tab2", "/pending-items");
        break;
      case 3:
        this.activeTab = 3;
        window.history.pushState(null, "Tab3", "/completed-items");
        break;
    }

  }


  examinePath() {
    switch (window.location.pathname) {
      case "/all-items":
      case "":
      default:
        this.activeTab = 1;
        break;
      case "/pending-items":
        this.activeTab = 2;
        break;
      case "/completed-items":
        this.activeTab = 3;
        break;
    }

    console.log(this.activeTab);

  }


}
