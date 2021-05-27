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
          <img src="./assets/img/lisa-logo.png">
        <mat-nav-list>
          <a mat-list-item routerLink="">Home</a>
          <a mat-list-item routerLink="tools">Tools</a>
          <a mat-list-item routerLink="projects">Projects</a>
          <a mat-list-item routerLink="contact">Contact</a>
        </mat-nav-list>
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

          <img *ngIf="isHandset$ | async" src="./assets/img/lisa-logo.png">
        </div>
        <ng-content>  
      </ng-content>
      </mat-sidenav-content>
      
    </mat-sidenav-container>
   `,
  styles: [`
    .sidenav-container {
      height: 100%;
    } 
    .mat-sidenav {
      background: rgba(242, 231, 201, 1);
    }
    .sidenav {
      width: 200px;
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
