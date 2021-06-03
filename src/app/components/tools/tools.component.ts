import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  template: `
  <div class="main-content layout">
    <section class="text">
      <h1> tools in my backpack</h1>
      <div class="list-container-tools">
        <div class="tools-list">
            <h2>toolbox</h2>
            <p>Figma</p>
            <p>Postman</p>
            <p>Git</p>
          </div>
          <div class="tools-list">
          <h2>code</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Angular</p>
            <p>Typescript</p>
          </div>
        </div>
    </section>
    <section class="image-tools">
      <img src="assets/icons/backpack.png">
    </section>
  </div>`,

  //show array of tools
  // <div *ngIf= "tools?.length">
  styles: []
})
export class ToolsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
