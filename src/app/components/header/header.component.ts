import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
   <img src="assets/img/lisa-logo.png">
  `,
  styles: [`
  img{
    margin: 0;
  }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
