import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Album';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.launchcode.org/assets/icons/lightbulb-c4f1fd6964247a0e1096d896405c591caa9378a16343413110f51fa4826162ea.png';
  image3 = 'https://www.launchcode.org/assets/icons/case-12b9e8d95fa7548f4df4385b03c06f3e7e7e1deed294be7bf59c2ba5262e60ef.png';

  constructor() { }

  ngOnInit() {
  }

}