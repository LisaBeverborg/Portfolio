import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="main-content layout">
    <section class="image">
      <img src="assets/img/home-portfolio.jpg">
    </section>
    <section class="text">
      <h1> Lisa Olde lütke Beverborg</h1>
      <p>info text about me</p>
    </section>
  </div>`,
  styles: [
   
  ]
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
