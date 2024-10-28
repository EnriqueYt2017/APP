import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-repet',
  templateUrl: './repet.page.html',
  styleUrls: ['./repet.page.scss'],
})
export class RepetPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  inicio(){
    this.navCtrl.navigateForward(['/intro'])
  }


}
