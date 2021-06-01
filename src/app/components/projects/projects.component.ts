import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <div class="main-content layout">
  <section class="image">
  <h1>Projects</h1>
  <img src="assets/img/projects-portfolio.png">
  </section>
  <section class="text">
  <h2>games</h2>
  <p>info text here</p>
  
  </section>
  </div>`,
  styles: [`
  .main-content{
    background-color: whisper;
    box-shadow:none;
  }
  .text{
    background-color: whisper;
  } `
  ]
})
export class ProjectsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  } 
}
