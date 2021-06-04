import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template:`
  <div class="container">
  <div class="main-content">
  <section class="image">
  </section>
  <section class="text">
  <h1>Contact me!</h1>
  <p style="font-weight:bold; text-align: center;">lisa.beverborg@gmail.com</p>
  <div class="contact-icons">
  <a href="https://github.com/LisaBeverborg" target="_blank">
  <img src="assets/icons/github.png">
  </a>
  <a style="margin-left: 10%" href="https://www.linkedin.com/in/lisaoldeluetkebeverborg/" target="_blank">
  <img src="assets/icons/linkedin.png">
  </a>
  </div>
  </section>
  </div>
  </div>`,
  styles: []
})
export class ContactComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
