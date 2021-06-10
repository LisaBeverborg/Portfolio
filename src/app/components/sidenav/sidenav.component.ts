import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" fixedInViewport
          [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
          [mode]="(isHandset$ | async) ? 'over' : 'side'"
          [opened]="(isHandset$ | async) === false">
         
       
        <div class="links-list">
        <img class="logo" src="./assets/icons/logo.svg" alt="logo">
        <a class="sidenav-icon" routerLink=""><img width="32" height="32" src="./assets/sidenav-icons/home.png" alt="home page"></a>
        <a class="sidenav-icon" routerLink="tools"><img width="32" height="32" src="./assets/sidenav-icons/backpack.png" alt="tools page"></a>
        <a class="sidenav-icon" routerLink="projects"><img  width="32" height="32"src="./assets/sidenav-icons/folder.png" alt="projects page"></a>
        <a class="sidenav-icon" routerLink="contact"><img  width="32" height="32"src="./assets/sidenav-icons/chat.png" alt="contact page"></a>
        </div>
      </mat-sidenav>
     
      <mat-sidenav-content >
    
        <div class="mobile-header">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async"
            style="margin: 3%;margin-bottom: 0%; border: none;"> 
            <img aria-label="Side nav toggle icon" src="./assets/icons/menu-32.png" alt="menu button">
          </button>
        </div>
        <ng-content>  
      </ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
   `,
  styles: [`
  .logo{
    margin-bottom: 30%;
    max-width: 85%; 
    height: auto;
  }
  .sidenav-icon {
    transition: all .2s ease-in-out; 
    cursor:pointer;
  }
  
  .sidenav-icon:hover { 
    transform: scale(1.3); 
    }
 
  .sidenav-container {
    height: 100%;
  } 
  .mat-sidenav {
    background: #ececec;
  }
  .mat-drawer-backdrop .mat-drawer-shown{
    background-color: rgba(0,0,0,0.6);
  }
  .mat-drawer-backdrop.mat-drawer-shown {
    visibility: visible;
}
   `]
})

export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
