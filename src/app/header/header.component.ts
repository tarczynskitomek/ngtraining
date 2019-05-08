import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [
    {label: 'Home', icon: 'pi pi-home', routerLink: '/'},
    {label: 'Candidates', icon: 'pi pi-user', routerLink: '/candidates'},
    {label: 'Jobs', icon: 'pi pi-briefcase', routerLink: '/jobs'},
    {label: 'Nope', icon: 'pi pi-times', routerLink: '/nope'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
