import { Component } from '@angular/core';
import { Album } from '../models/album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketpalce',
  templateUrl: './marketpalce.component.html',
  styleUrls: ['./marketpalce.component.css']
})
export class MarketpalceComponent {

  albums: Album[];

  constructor(private router: Router){}

  goToDetailPage(clickedAlbum: Album){
   this.router.navigate(['albums', clickedAlbum.id]);
  }

}
