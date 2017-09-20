import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = [
      {
        imgPath: "Screen Shot 2017-09-20 at 3.08.22 PM.png",
          title: "90's Renaissance Gangsters",
          desc: "JustinRichburg Made It!",
          favorited: false


      },
      {
          imgPath: "Screen Shot 2017-09-20 at 3.08.37 PM.png",
          title: "Selfie",
          desc: "JustinRichburg Made It!",
          favorited: false
      },
      {
          imgPath: "Screen Shot 2017-09-20 at 3.08.47 PM.png",
          title: "House Party",
          desc: "JustinRichburg Made It!",
          favorited: false
      },
  ]
  constructor(public navCtrl: NavController) {

  }

  clickFav(card) {
    let index = this.cards.indexOf(card);

    if(index > -1){
     if(card.favorited){
       this.cards[index].favorited = false;
     }else{
       this.cards[index].favorited = true;
     }
    }
  }

}
