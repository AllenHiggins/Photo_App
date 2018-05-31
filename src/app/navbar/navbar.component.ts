import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title:string = "Gallery";
  searchText:string = "GO!";
  links = ["Home", "something", "About"];

  constructor() { }

  ngOnInit() {
  }

}
