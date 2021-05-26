import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sidenav>
    <router-outlet></router-outlet>
    </app-sidenav>`,
  styles: [

  ]
})
export class AppComponent {
  title = 'Portfolio';
}
