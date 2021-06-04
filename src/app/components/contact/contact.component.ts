import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template:`
  <div class="container">
  <div class="main-content">
  <section class="image">
  
  <h1>Send me a message!</h1>
  <form class="form" target="_blank" action="https://formsubmit.co/lisa.beverborg@gmail.com" method="POST">
    <div class="form-name">
    <input type="text" name="name" autocomplete="off" required >
    <label for="name" class="label-name">
      <span class="content-name">Name</span>
    </label>
    </div>      
    <input type="email" name="email" autocomplete="off" required>
    <textarea name="message" rows="10" autocomplete="off" required></textarea>
    <button type="submit">Send</button>
  </form>

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
