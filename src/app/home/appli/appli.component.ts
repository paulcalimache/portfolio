import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appli',
  templateUrl: './appli.component.html',
  styleUrls: ['./appli.component.scss']
})
export class AppliComponent implements OnInit {

  @Input() data: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
