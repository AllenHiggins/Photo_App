import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit , OnChanges {

  @Input() filterBy?: string = 'All';
  visibleImages: any[] = [];



  constructor(private imageService:ImageService) {
    
  }

  ngOnInit() {
    this.visibleImages = this.imageService.getImages();
    console.log(this.visibleImages);
  }

  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }
}
