import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists:any[]=[];
  loading:boolean;

  constructor(private spotify: SpotifyService) { 
    this.loading=true;
  }
  
  ngOnInit(): void {
  }
  
  search(term:string){
    this.loading=true;
    this.spotify.getArtists(term)
      .subscribe((data:any)=>{
        this.artists=data;
        this.loading=false;
      })
  }

}
