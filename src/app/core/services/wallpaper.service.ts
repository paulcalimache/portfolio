import { Injectable } from '@angular/core';
import { IWallpaper } from '@models/IWallpaper';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WallpaperService {

  constructor() {
    this._activeWallpaper = this.wallpaperList[0];
  }

  public wallpaperObservable: Subject<void> = new Subject<void>();

  public get wallpaperList(): IWallpaper[] {
    return this._wallpaperList;
  }
  private _wallpaperList: IWallpaper[] = [
    {path: "/assets/wallpaper/STARRY_SKY.jpg", backgroundColor: 'rgb(18,29,37)'},
    {path: "/assets/wallpaper/LOFI_DOGGIE.jpg", backgroundColor: 'rgb(0,177,184)'},
    {path: "/assets/wallpaper/PLANTAE_SUMMER_RELAX.jpg", backgroundColor: 'rgb(224,214,201)'},
    {path: "/assets/wallpaper/POOL_DAY_QUEER_BEAR.jpg", backgroundColor: 'rgb(217, 201, 191)'},
  ];

  public get activeWallpaper(): IWallpaper {
    return this._activeWallpaper;
  }
  public set activeWallpaper(w: IWallpaper) {
    this._activeWallpaper = w;
    this.wallpaperObservable.next();
  }
  private _activeWallpaper: IWallpaper;


}
