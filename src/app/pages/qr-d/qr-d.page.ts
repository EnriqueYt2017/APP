import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClaseService } from '../../services/clase.service';

@Component({
  selector: 'app-qr-d',
  templateUrl: './qr-d.page.html',
  styleUrls: ['./qr-d.page.scss'],
})
export class QrDPage implements OnInit {
  valorQR: string = '';
  valorQRJSON: any = [];

  constructor(
    private navCtrl: NavController,
    private claseService: ClaseService
  ) {}

  ngOnInit() {
    this.claseService.getClaseSeleccionada().subscribe((clase) => {
      if (clase) {
        this.valorQRJSON = [
          {
            nombre: clase.nombre,
            codigo: clase.codigo,
            profesor: clase.profesor,
            hora: clase.hora,
          },
        ];
        this.valorQR = JSON.stringify(this.valorQRJSON);
      }
    });
  }

  navegarAHome() {
    this.navCtrl.navigateRoot('/home');
  }
}