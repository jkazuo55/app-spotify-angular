import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newSongs:any[]=[];
  loading:boolean;
  error:boolean;

  constructor(private spotify:SpotifyService) { 
    this.loading=true;
    this.error=false;

    this.spotify.getNewReleases()
      .subscribe((data:any)=>{
        this.newSongs=data;
        this.loading=false;
      },(errorServicio)=>{

        this.loading=false;
        this.error = true;
        console.log(errorServicio)
      });
  }

  ngOnInit(): void {
  }

}
