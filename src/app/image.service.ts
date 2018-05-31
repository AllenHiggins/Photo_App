import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

}
 
// Fake data from an api json object example
const IMAGES = [

  {"id": 1, "category": "Comic Heros", "caption": "Batman", "url": "assests/images/....."},
  // 6
  {"id": 2, "category": "Starwars", "caption": "Jdei", "url": "assests/images/....."},
  // 6
  {"id": 3, "category": "80s TV", "caption": "A-Team", "url": "assests/images/....."}
  // 6

]