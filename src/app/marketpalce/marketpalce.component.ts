import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketpalce',
  templateUrl: './marketpalce.component.html',
  styleUrls: ['./marketpalce.component.css'],
  providers: [AlbumService]
})
export class MarketpalceComponent implements OnInit{

  albums: FirebaseListObservable<any[]>;

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

  constructor(private router: Router, private albumService: AlbumService){}

  goToDetailPage(clickedAlbum: Album){
   this.router.navigate(['albums', clickedAlbum.$key]);
  }

}
