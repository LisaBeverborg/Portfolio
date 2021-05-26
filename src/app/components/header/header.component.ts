import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
   <img src="assets/img/lisa-logo.png">
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
