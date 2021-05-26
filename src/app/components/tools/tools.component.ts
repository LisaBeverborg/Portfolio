import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  template: `
  <div class="main-content layout">
    <section class="text">
      <h1> tools in my backpack</h1>
      <ul>HTML</ul>
      <ul>CSS</ul>
      <ul>JavaScript</ul>
    </section>
    <section class="image">
      <img src="assets/img/tools-portfolio.jpg">
    </section>
  </div>`,
  styles: [
  ]
})
export class ToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
