import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('spotify service listo')
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDrh37_6e6__SR9F7Fqm1yC9lUnMW63Kg31Omqq_DI3O4Tj6w3yAWAtvk4xCigV9I_CvKVKljvYbvbW70s'
    })

    return this.http.get(url,{headers})
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( (data:any) => data['albums'].items));    
  }

  getArtists(term:string){
    return this.getQuery(`search?q=${term}&type=artist&limit=15`)
      .pipe( map( (data:any) => data['artists'].items));
    
  }
  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
      // .pipe( map( (data:any) => data['artists'].items));
    
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?market=us`)
      .pipe( map( (data:any) => data['tracks']));
    
  }

  
}
