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

  {"id": 1, "category": "Comic Heros", "caption": "Batman Looks Happy", "url": "http://localhost:4200/assets/images/BigBats.jpg"},
  {"id": 2, "category": "Comic Heros", "caption": "Batman Loves Snowball fights", "url": "http://localhost:4200/assets/images/BatmanSnow.jpg"},
  {"id": 3, "category": "Comic Heros", "caption": "Go Batman", "url": "http://localhost:4200/assets/images/BVS.jpg"},
  {"id": 4, "category": "Comic Heros", "caption": "Show Time!", "url": "http://localhost:4200/assets/images/AlarmCall.jpg"},
  {"id": 5, "category": "Starwars", "caption": "Darth Vader", "url": "http://localhost:4200/assets/images/darthVader.jpg"},
  {"id": 6, "category": "Starwars", "caption": "Death Star", "url": "http://localhost:4200/assets/images/deathStar.jpg"},
  {"id": 7, "category": "Starwars", "caption": "The Force Awakens... then falls asleep.", "url": "http://localhost:4200/assets/images/theforceawakens.jpg"},
  {"id": 8, "category": "Starwars", "caption": "I have a bad feeling about this.", "url": "http://localhost:4200/assets/images/thelast.jpg"},
  {"id": 9, "category": "80s TV", "caption": "A-Team", "url": "http://localhost:4200/assets/images/theateam.jpg"},
  {"id": 10, "category": "80s TV", "caption": "Miami Vice", "url": "http://localhost:4200/assets/images/miamivice.jpg"},
  {"id": 11, "category": "80s TV", "caption": "CHIPS", "url": "http://localhost:4200/assets/images/chips.jpg"},
  {"id": 12, "category": "80s TV", "caption": "Kojak, 'who loves you baby' ", "url": "http://localhost:4200/assets/images/Kojak.jpg"}
]