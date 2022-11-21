import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WallpaperService } from '@services/wallpaper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get Date(): string {
    var minutes = new Date().getMinutes();
    if(minutes <= 9) {
      return new Date().getHours()+ ':' + '0' + minutes;
    }
    return new Date().getHours()+ ':' + minutes;
  }

  constructor(private route: Router, private wpService: WallpaperService) {
    document.body.style.backgroundColor = this.wpService.activeWallpaper.backgroundColor;
    this.wpService.wallpaperObservable.subscribe({
      next: () => {
        document.body.style.backgroundColor = this.wpService.activeWallpaper.backgroundColor;
        // provisional implementation
        if (this.wpService.activeWallpaper.backgroundColor !== 'rgb(18,29,37)') {
          console.log("test");
          document.getElementById('signature')!.style.color = 'black';
        } else {
          document.getElementById('signature')!.style.color = 'lightgrey';
        }
      }
    })
  }
  
  public title: string = 'portfolio';

  public get IsHomePage() {
    console.log(this.route.url)
    return this.route.url === '/';
  }

}
