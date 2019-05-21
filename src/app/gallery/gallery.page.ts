import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  data: any
  gallery: any = [
    {
      image: 'http://1.bp.blogspot.com/-9Tx8hQaDS0o/Te5PDeWhqoI/AAAAAAAAAaA/wNdLruz18i8/s1600/kitty-cu.gif'
    },
    {
      image: 'https://i.ytimg.com/vi/PU6vyUuNobs/maxresdefault.jpg'
    },
    {
      image: 'https://i.ytimg.com/vi/T8n100YxNJg/maxresdefault.jpg'
    },
    {
      image:'https://i.ytimg.com/vi/Tv9vtj2ntLw/maxresdefault.jpg'
    }
  ]
  datasuccess = true

  constructor(
    private photoViewer: PhotoViewer,
    public act: ActivatedRoute
  ) { }

  async ngOnInit() {
    let res: any = this.act.snapshot.paramMap.get('data');
    this.data = await JSON.parse(res)
    console.log(this.data);
  }

  viewer(image: string) {
    // console.log(image);
    this.photoViewer.show(image, '', { share: false });
  }

}
