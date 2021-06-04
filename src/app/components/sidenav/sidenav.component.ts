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
        <img src="./assets/icons/logo.svg">
        <a class="sidenav-icon" routerLink=""> <img src="./assets/sidenav-icons/home.png"></a>
        <a class="sidenav-icon" routerLink="tools"> <img src="./assets/sidenav-icons/backpack.png"></a>
        <a class="sidenav-icon" routerLink="projects"> <img src="./assets/sidenav-icons/folder.png"></a>
        <a class="sidenav-icon" routerLink="contact"> <img src="./assets/sidenav-icons/chat.png"></a>
        </div>
      </mat-sidenav>
     
      <mat-sidenav-content >
    
        <div class="mobile-header">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
        
        </div>
      
        <ng-content>  
      </ng-content>
    
     
      </mat-sidenav-content>
     
    </mat-sidenav-container>
   `,
  styles: [`
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
   `]
})



/*  <mat-nav-list>
          <a mat-list-item src="assets/icons/home.png" routerLink=""></a>
          <a mat-list-item routerLink="tools">Tools</a>
          <a mat-list-item routerLink="projects">Projects</a>
          <a mat-list-item routerLink="contact">Contact</a>
        </mat-nav-list>
*/
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
