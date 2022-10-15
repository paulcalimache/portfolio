import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WallpaperService } from '@services/wallpaper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route: Router, private wpService: WallpaperService) {
    document.body.style.backgroundColor = this.wpService.activeWallpaper.backgroundColor;
    this.wpService.wallpaperObservable.subscribe({
      next: () => {
        document.body.style.backgroundColor = this.wpService.activeWallpaper.backgroundColor;
      }
    })
  }
  
  public title: string = 'portfolio';

  public get IsHomePage() {
    console.log(this.route.url)
    return this.route.url === '/';
  }

}
