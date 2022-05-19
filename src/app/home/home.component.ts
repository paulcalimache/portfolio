import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public About: string[] = ['About', '/assets/Icons/paper.svg', 'rgb(38, 70, 83)'];
  public Contact: string[] = ['Contact', '/assets/Icons/contact-mail-red.svg', 'rgb(177, 221, 241)'];
  public Work: string[] = ['Work', '/assets/Icons/works-box.svg', 'rgb(247, 214, 224)'];
  public Github: string[] = ['Github', '/assets/Icons/github.png', 'black'];
  public Linkedin: string[] = ['Linkedin', '/assets/Icons/LinkedIn.png', 'rgb(0, 127, 188)'];
}
