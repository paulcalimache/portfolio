import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WallpaperService } from '@services/wallpaper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private route: Router, private wpService: WallpaperService){
    this.wpService.wallpaperObservable.subscribe({
      next: () => {
        this.backgroundImage = this.wpService.activeWallpaper.path;
      },
    })
  };

  public backgroundImage: string = this.wpService.activeWallpaper.path;

  public About: string[] = ['About', '/assets/Icons/paper.svg', 'rgb(38, 70, 83)'];
  public Contact: string[] = ['Contact', '/assets/Icons/contact-mail-red.svg', 'rgb(177, 221, 241)'];
  public Work: string[] = ['Work', '/assets/Icons/works-box.svg', 'rgb(247, 214, 224)'];
  public Github: string[] = ['Github', '/assets/Icons/github.png', 'black'];
  public Linkedin: string[] = ['Linkedin', '/assets/Icons/LinkedIn.png', 'rgb(0, 127, 188)'];
  public Settings: string[] = ['Settings', '/assets/Icons/settings.svg', 'rgb(52, 52, 52)'];

  public async changePage(page: string, bgcolor: string): Promise<void> {

    await this.animation(bgcolor);
    this.route.navigateByUrl(page);

  };

  private animation(bgcolor: string) {
    const fader = document.getElementById('fader')!;
  
    fader.animate([
      {width: '5%', height: '5%', borderRadius: '50%', backgroundColor: bgcolor},
      {width: '60%', height: '60%', borderRadius: '50%', backgroundColor: bgcolor},
      {width: '100%', height: '100%', borderRadius: '0', backgroundColor: bgcolor }
    ], {
    duration: 750,
    fill: "forwards",
    }
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    });

  }
}
