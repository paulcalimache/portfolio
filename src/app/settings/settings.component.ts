import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public readonly BG_COLOR: string = 'rgb(150, 150, 150)';

  public get Background(): IBackground {
    return this.background;
  }
  private background: IBackground = {path: "/assets/wallpaper/STARRY_SKY.jpg", isActive: true};

  private backgroundList: IBackground[] = [
    {path: "/assets/wallpaper/STARRY_SKY.jpg", isActive: true},
    {path: "/assets/wallpaper/LOFI DOGGIE.jpg", isActive: false},
    {path: "/assets/wallpaper/PLANTAE SUMMER RELAX.jpg", isActive: false},
    {path: "/assets/wallpaper/POOL_DAY_QUEER_BEAR.jpg", isActive: false},
  ]

  ngOnInit(): void {
    // find actual background
  }

  public bgNext(bg: IBackground) {
    let bgIndex: number = this.backgroundList.findIndex(i => i.path === bg.path);
    console.log("_______DEBUG_______", bgIndex)
    if (bgIndex !== this.backgroundList.length-1){
      this.background = this.backgroundList[bgIndex+1];
    }
  }
  public bgPrevious(bg: IBackground) {
    let bgIndex: number = this.backgroundList.findIndex(i => i.path === bg.path);
    if (bgIndex !== 0){
      this.background = this.backgroundList[bgIndex-1];
    }
  }

}

export interface IBackground {
  path: string;
  isActive: boolean;
}