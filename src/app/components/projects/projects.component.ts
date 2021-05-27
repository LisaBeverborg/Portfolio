import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <div class="main-content layout">
    <section class="image">
      <img src="assets/img/home-portfolio.jpg">
    </section>
    <section class="text">
      <h1>Projects</h1>
      <p>info text here</p>
    </section>
  </div>`,
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
