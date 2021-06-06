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
    <div class="form-name"> 
    <input type="email" name="name" autocomplete="off" required>
    <label for="name" class="label-name">
      <span class="content-name">Email</span>
      </label>
    </div>
    <div class="form-textarea"> 
      <textarea style="margin-top: 1rem; width:100%" name="message" rows="10" autocomplete="off" placeholder="Your Message" required></textarea>
    </div>
    <button class="animated-button" type="submit">Send</button>
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
  styles: [
    `.image > h1:first-of-type {
      margin-bottom: 0;
    }
    
    .contact-icons {
      display: flex;
      justify-content: center;
    }
    
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .form-name{
      width: 70%;
      height: 70px;
      position: relative;
      overflow: hidden;
    }
    
    .form-name input {
      width: 100%;
      height: 100%;
      padding-top: 20px;
      border: none;
      outline: none;
      background-color: #ececec;
      font-size: 20px;
    }
    
    .form-name label {
      position: absolute;
      bottom: 0px;
      left: 0%;
      height: 100%;
      width: 100%;
      pointer-events: none;
      border-bottom: 1px solid black;
    }
    
    .form-name label::after {
      content: "";
      position: absolute;
      left: -1px;
      bottom: 0px;
      height: 100%;
      width: 100%;
      border-bottom: 2px solid green;
      transform: translate(-100%);
      transition: transform 0.3s ease;
    }
    
    .content-name {
      position: absolute;
      bottom: 5px;
      left: 0px;
      transition: all 0.3s ease;
    }
    
    .form-name input:focus + .label-name .content-name,
    .form-name input:valid + .label-name .content-name {
      transform: translateY(-150%);
      font-size: 16px;
      color: green;
    }
    
    .form-name input:focus + .label-name::after {
      transform: translateX(0%);
    }
    
    .form-textarea {
      width: 70%;
      padding: 5px;
      font-size: 16px;
    }`
  ]
})
export class ContactComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
