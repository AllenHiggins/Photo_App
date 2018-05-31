import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../image.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  title:string = "Photos";
  visibleImages: any[] = [];

  constructor(private imageService:ImageService) {
  }

  ngOnInit() {  
    this.visibleImages = this.imageService.getImages();
    console.log(this.visibleImages);
  }

}
