import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  visibleImages = [];

  constructor() { }

  getImages(){
    return this.visibleImages = IMAGES.splice(0);
  }

  getImg(id: number){
    return IMAGES.slice(0).find((image) => image.id == id );
  }

}
 
// Fake data from an api json object example
const IMAGES = [

  {"id": 1, "category": "Comic Heros", "caption": "Batman Looks Happy", "url": "assets/images/BigBats.jpg"},
  {"id": 2, "category": "Comic Heros", "caption": "Batman Loves Snowball fights", "url": "assets/images/BatmanSnow.jpg"},
  {"id": 3, "category": "Comic Heros", "caption": "Go Batman", "url": "assets/images/BVS.jpg"},
  {"id": 4, "category": "Comic Heros", "caption": "Show Time!", "url": "assets/images/AlarmCall.jpg"},
  {"id": 5, "category": "Starwars", "caption": "Darth Vader", "url": "assets/images/darthVader.jpg"},
  {"id": 6, "category": "Starwars", "caption": "Death Star", "url": "assets/images/deathStar.jpg"},
  {"id": 7, "category": "Starwars", "caption": "The Force Awakens... then falls asleep.", "url": "assets/images/theforceawakens.jpg"},
  {"id": 8, "category": "Starwars", "caption": "I have a bad feeling about this.", "url": "assets/images/thelast.jpg"},
  {"id": 9, "category": "80s TV", "caption": "A-Team", "url": "assets/images/theateam.jpg"},
  {"id": 10, "category": "80s TV", "caption": "Miami Vice", "url": "assets/images/miamivice.jpg"},
  {"id": 11, "category": "80s TV", "caption": "CHIPS", "url": "assets/images/chips.jpg"},
  {"id": 12, "category": "80s TV", "caption": "Kojak, 'who loves you baby' ", "url": "assets/images/Kojak.jpg"}
]