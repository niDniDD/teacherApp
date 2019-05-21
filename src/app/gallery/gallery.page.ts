import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  gallery: any = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2Ea88m8fQj2NsfHf8wei-pwIB3GJhXB8TLLphOomKRB1mykR'
    }
  ]
  datasuccess = true

  constructor(
    private photoViewer: PhotoViewer
  ) { }

  ngOnInit() {
  }

  viewer(image) {
    console.log(image);
    this.photoViewer.show('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2Ea88m8fQj2NsfHf8wei-pwIB3GJhXB8TLLphOomKRB1mykR');
  }

}
