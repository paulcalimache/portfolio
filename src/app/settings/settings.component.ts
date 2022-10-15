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

  constructor(private wpService: WallpaperService) {
    this.WallpaperList = this.wpService.wallpaperList;
  }

  public selectWallpaper(wp: IWallpaper): void {
    this.wpService.activeWallpaper = wp;
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
    return wp === this.wpService.activeWallpaper ? '2px white solid' : '';
  }

}