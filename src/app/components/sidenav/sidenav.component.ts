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
        <img style="padding-left:30px; padding-bottom:5%;"src="./assets/icons/logo.svg">
        <mat-icon style="filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.5));"class="icon-color" routerLink="" aria-hidden="false" aria-label="home icon">home</mat-icon>
        <mat-icon style="filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.5));"routerLink="tools" aria-hidden="false" aria-label="info icon">info</mat-icon>
        <mat-icon style="filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.5));"routerLink="projects" aria-hidden="false" aria-label="folder icon">folder</mat-icon>
        <mat-icon style="filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.5));"routerLink="contact" aria-hidden="false" aria-label="contact icon">chat_bubble</mat-icon>
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
          <img *ngIf="isHandset$ | async" src="./assets/icons/logo.svg">
        </div>
        <ng-content>  
      </ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
   `,
  styles: [`
  .mat-icon {
    font-size: 60px;
    transition: all .2s ease-in-out; 
    cursor:pointer;
  }
  .mat-icon:hover { 
    transform: scale(1.1); 
    }
  .sidenav-container {
    height: 100%;
  } 
  .mat-sidenav {
    background: #ececec;
  }
   `]
})

/*<div style=" display: block;
margin-left: 30%;
margin-right: auto;
width: 50%;
margin-top:10%">
<img src="./assets/icons/logo.svg">
</div> */

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
