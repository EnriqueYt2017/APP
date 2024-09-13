import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.page.html',
  styleUrls: ['./recupera.page.scss'],
})
export class RecuperaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

    
  repetir(){
    this.navCtrl.navigateForward(['/repet'])
  }


}
