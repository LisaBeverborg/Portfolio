import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Info } from '../../models/info';

@Component({
  selector: 'app-home',
  template: `
  <div class="main-content layout">
  <section class="image">
  <h1> Lisa Olde lütke Beverborg</h1>
  <img style="border-radius: 50%;" src="assets/img/home-portfolio.jpg">
  </section>
  <section class="text" >
  <p style="font-weight: bold; margin-top:20%; ">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Vestibulum vitae vehicula felis, ut posuere augue. Proin consectetur, 
  nulla at malesuada eleifend, enim lectus tincidunt mauris
  </p>
  <p>Cras porttitor nec lorem eleifend viverra. Duis eget dignissim nunc, a placerat 
  tellus. Etiam dapibus orci est, eu congue velit viverra ac. Cras urna est, tempus 
  et justo sit amet, dapibus ornare augue. Pellentesque habitant morbi tristique senectus
  et netus et malesuada fames ac turpis egestas. Quisque tincidunt dolor id rhoncus 
  fringilla. Morbi urna lectus, viverra ac est et, consequat eleifend tellus. Praesent 
  condimentum consequat est, euismod fermentum lacus facilisis quis
  </p>
  <button class="animated-button">check out projects</button>
  </section>
  </div>`,
  // add info from database to homecomponent html
  // <p> {{ infos.introduction }}</p>
  
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
