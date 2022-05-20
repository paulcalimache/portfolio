import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/lottieMail.json',

  };
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
