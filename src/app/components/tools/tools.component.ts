import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  template: `
  <div class="main-content layout">
    <section class="text">
      <h1> tools in my backpack</h1>
      <div class="list-container">
        <div class="list">
            <h2>toolbox</h2>
          </div>
          <div class="list">
          <h2>code</h2>
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
          </div>
        </div>
    </section>
    <section class="image">
      <img src="assets/img/tools-portfolio.jpg">
    </section>
  </div>`,

  //show array of tools
  // <div *ngIf= "tools?.length">
  styles: [
  ]
})
export class ToolsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
