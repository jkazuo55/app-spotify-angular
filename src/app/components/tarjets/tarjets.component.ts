import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjets',
  templateUrl: './tarjets.component.html',
  styleUrls: ['./tarjets.component.css']
})
export class TarjetsComponent implements OnInit {

  @Input() items:any[]=[];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showArtist(item:any){
    let artistId;
    if(item.type === 'artist'){
      artistId = item.id;
    }else{
      artistId=item.artists[0].id;
    }

    this.router.navigate(['/artist',artistId]);
  }

}
