import { Component, OnInit, Input } from '@angular/core';
import { Work } from '../IWork'

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss']
})
export class WorkItemComponent implements OnInit {

  @Input() WorkItem: Work | undefined;

  public get ExtendDesc(): boolean {
    return this.extendDesc;
  }
  private extendDesc: boolean = false;

  ngOnInit(): void {
  }

  public toggleDescription(): void {
    if (this.ExtendDesc === false) {
      this.extendDesc = true;
    } else if (this.ExtendDesc === true) {
      this.extendDesc = false;
    }
  }

}
