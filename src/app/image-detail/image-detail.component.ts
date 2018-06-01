import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  image:any;

  constructor(private imageService:ImageService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImg(
      +this.route.snapshot.params['id']
    );
  }

}
