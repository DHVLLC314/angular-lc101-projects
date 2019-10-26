import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-0/p206x206/10616189_10203270531225590_7971528846394829749_n.jpg?_nc_cat=107&_nc_oc=AQlDVVM-ioutcXVrM1dcgBCbYYovRYo2KJrSpXdpsBSaP6NnVen4tudaBbAR-DpnUpY&_nc_ht=scontent-ort2-2.xx&oh=c5e50bb87cf6ccebc1dbde8e6f0d9b4e&oe=5E56DD34';
  image3 = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-0/p206x206/31384132_10214856697706959_8527237630075600896_n.jpg?_nc_cat=103&_nc_oc=AQnIwrPDepnkiMwKL6f_0sOSrjgWptaJgU2IaVru-juHCPQElxHYTml-DPm1JmUycdQ&_nc_ht=scontent-ort2-2.xx&oh=debef4fecc673360aa90de5a412ccb68&oe=5E278555';

  constructor() { }

  ngOnInit() {
  }

}
