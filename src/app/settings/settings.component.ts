import { Component } from '@angular/core';
import { IWallpaper } from '@models/IWallpaper';
import { WallpaperService } from '@services/wallpaper.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  public readonly BG_COLOR: string = 'rgb(52, 52, 52)';

  public WallpaperList: IWallpaper[];
  public Index: number = 0;

  public modifyEvent: boolean = false;
  private timeout!: NodeJS.Timeout;

  constructor(private wpService: WallpaperService) {
    this.WallpaperList = this.wpService.wallpaperList;
    this.Index = this.WallpaperList.findIndex((value: IWallpaper) => value === this.wpService.activeWallpaper);
  }

  public selectWallpaper(wp: IWallpaper): void {
    clearTimeout(this.timeout);
    this.wpService.activeWallpaper = wp;
    this.modifyEvent = true;
    this.timeout = setTimeout(() => {
      this.modifyEvent = false;
    }, 3000);
  }
  public wpNext(): void {
    if(this.Index < this.WallpaperList.length-1){
      this.Index++;
    }
  }
  public wpPrevious(): void {
    if(this.Index > 0){
      this.Index--;
    }
  }
  public isActiveWallpaper(wp: IWallpaper): string {
    return wp === this.wpService.activeWallpaper ? '3px white solid' : '';
  }

}