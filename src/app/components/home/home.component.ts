import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Info } from '../../models/info';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
  <div class=" main-content">
  <section class=" animate__rotateIn image">
  <h1> Lisa Olde lütke Beverborg</h1>
  <img class="home-image" style="border-radius: 50%;" src="assets/img/home-portfolio.jpg" alt="picture Lisa">
  </section>
  <section class="text">
  <p *ngFor="let info of infos" style=" margin-left:5%">{{info.introduction}}</p>
  <button class="animated-button" routerLink="projects">check out projects</button>
  </section>
  </div>
  </div>`,
  
  styles: []
})
export class HomeComponent implements OnInit {
  public infos!: Info;
  
  constructor(private infoService: InfoService) { }
  
  ngOnInit() {
    this.infoService.getInfos().subscribe(infos => {
      this.infos = infos;
    });
  } 
}
