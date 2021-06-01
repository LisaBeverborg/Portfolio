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
  <p>lisa.beverborg@gmail.com</p>
  <a href="https://github.com/LisaBeverborg" target="_blank">
  <img class=""src="assets/icons/github.png">
  </a>
  <a href="https://www.linkedin.com/in/lisaoldeluetkebeverborg/" target="_blank">
  <img src="assets/icons/linkedin.png">
  </a>
  </section>
  </div>`,
  styles: []
})
export class ContactComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
