import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <div class="projects-content">
  <h1>Projects</h1>
  <section class="cards-projects" >
  <ul class="cards">
  <li>
    <a href="https://lisabeverborg.github.io/my-games/#/memory" target="_blank" rel="noreferrer" class="card">
      <img src="./assets/img/games-project.png" class="card__image" alt="games project" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__header-text">
            <h3 class="card__title">Memory, Snake and Minesweeper</h3>            
            <span class="card__status">HTML, CSS, JS, React, React Bootstrap</span>
          </div>
        </div>
        <p class="card__description">Games build with React and a Leaderboard in Firestore</p>
      </div>
    </a>      
  </li>
  <li>
  <a href="https://lisabeverborg.github.io/weatherapp/" target="_blank" rel="noreferrer" class="card">
    <img src="./assets/img/weather-project.png" class="card__image" alt="weather project" />
    <div class="card__overlay">
      <div class="card__header">
        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
        <div class="card__header-text">
          <h3 class="card__title">weather app</h3>            
          <span class="card__status">HTML, CSS, JS, Bootstrap, API</span>
        </div>
      </div>
      <p class="card__description">Weather app build with the Accu Weather API and using local storage</p>
    </div>
  </a>      
</li>
<li>
<a href="https://lisabeverborg.github.io/Javascript-Mini-Projects/" target="_blank" rel="noreferrer" class="card" >
  <img src="./assets/img/js-project.png" class="card__image" alt="games project"/>
  <div class="card__overlay">
    <div class="card__header">
      <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
      <div class="card__header-text">
        <h3 class="card__title">other</h3>            
        <span class="card__status">HTML, CSS, JS Bootstrap</span>
      </div>
    </div>
    <p class="card__description">Collection of small JavaScript projects. Page in progress</p>
  </div>
</a>      
</li>
</ul>
<h4 style="text-align:center">check out more projects on my 
<a style="text-decoration: none; color: black;  border: 2px solid #839A6A; padding: 5px 10px;
text-align: center; border-radius: 15px;" href="https://github.com/LisaBeverborg" target="_blank" rel="noreferrer">github</a></h4>
  </section>
  </div>`,
  styles: [
    `
    * {
      box-sizing: border-box;
    }

    .projects-content > h1{
      margin-bottom: 0;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 4rem 5vw;
      padding: 0;
      list-style-type: none;
    }
    
    .card {
      position: relative;
      display: block;
      height: 100%;  
      border-radius: calc(var(--curve) * 1px);
      overflow: hidden;
      text-decoration: none;
    }
    
    .card__image {      
      width: 100%;
      height: auto;
    }
    
    .card__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;      
      border-radius: calc(var(--curve) * 1px);    
      background-color: var(--surface-color);      
      transform: translateY(100%);
      transition: .2s ease-in-out;
    }
    
    .card:hover .card__overlay {
      transform: translateY(0);
    }
    
    .card__header {
      position: relative;
      display: flex;
      align-items: center;
      gap: 2em;
      padding: 2em;
      border-radius: calc(var(--curve) * 1px) 0 0 0;    
      background-color: var(--surface-color);
      transform: translateY(-100%);
      transition: .2s ease-in-out;
    }
    
    .card__arc {
      width: 80px;
      height: 80px;
      position: absolute;
      bottom: 100%;
      right: 0;      
      z-index: 1;
    }
    
    .card__arc path {
      fill: var(--surface-color);
      d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
    }       
    
    .card:hover .card__header {
      transform: translateY(0);
    }
    
    .card__title {
      font-size: 1em;
      margin: 0 0 .3em;
      color:black;
    }
    
    .card__tagline {
      display: block;
      margin: 1em 0;
      font-size: .8em; 
    }
    
    .card__status {
      font-size: .8em;
      color: black;
    }
    
    .card__description {
      padding: 0 2em 2em;
      margin: 0;
      color: black;  
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }    `
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  } 
}
