import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Info } from '../../models/info';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
  <div class="main-content">
  <section class="image">
  <h1> Lisa Olde lütke Beverborg</h1>
  <img class="home-image" style="border-radius: 50%;" src="assets/img/home-portfolio.jpg">
  </section>
  <section class="text" >
  <div *ngFor="let info of infos">
  <p style="font-weight: bold; margin-top:25%;">{{info.introduction}}</p>
  </div>
  <button class="animated-button">check out projects</button>
  </section>
  </div>
  </div>`,
  
  styles: []
})
export class HomeComponent implements OnInit {
  public infos!: Info;
  
  constructor(private infoService: InfoService) { }
  
  ngOnInit() {
    console.log('on init ran')
    this.infoService.getInfos().subscribe(infos => {
      console.log(infos);
      this.infos = infos;
    });
  } 
}
