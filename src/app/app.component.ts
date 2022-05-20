import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route: Router) { }
  
  public title: string = 'portfolio';

  public get IsHomePage() {
    console.log(this.route.url)
    return this.route.url === '/';
  }

}
