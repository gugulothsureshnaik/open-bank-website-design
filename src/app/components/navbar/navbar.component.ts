import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @HostListener('window:scroll', ['$event'])
  constructor() { }

  ngOnInit(): void {
  }

  
  // onWindowScroll() {
  //     let element = document.querySelector('.navbara');
  //     if (window.pageYOffset > element.clientHeight) {
  //       element.classList.add('navbar-inverse');
  //     } else {
  //       element.classList.remove('navbar-inverse');
  //     }
  //   }
}
