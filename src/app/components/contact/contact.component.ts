import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template:`
  <div class="main-content layout">
    <section class="image">
      <img src="assets/img/home-portfolio.jpg">
    </section>
    <section class="text">
      <h1>Contact me!</h1>
      <img class=""src="assets/icons/github.png">
      <img src="assets/icons/linkedin.png">
    </section>
  </div>`,
  styles: [
    
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
