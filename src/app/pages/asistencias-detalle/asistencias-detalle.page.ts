import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaseService } from 'src/app/services/clase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia-detalle', // Asegúrate de que este selector sea único
  templateUrl: './asistencias-detalle.page.html', // Verifica que la ruta sea correcta
  styleUrls: ['./asistencias-detalle.page.scss'],
})
export class AsistenciaDetallePage implements OnInit {
  fechasAsistencia: string[] = [];
  claseId: string;

  constructor(
    private route: ActivatedRoute,
    private claseService: ClaseService,
    private navCtrl: NavController
  ) {
    this.claseId = this.route.snapshot.paramMap.get('claseId')!;
  }

  ngOnInit() {
    this.obtenerFechasDeAsistencia();
  }

  obtenerFechasDeAsistencia() {
    this.claseService.obtenerFechasDeAsistencia(this.claseId).subscribe((fechas) => {
      this.fechasAsistencia = fechas;
    });
  }

  verDetalleEstudiantes(fecha: string) {
    this.navCtrl.navigateForward([`/detalle-estudiantes/${this.claseId}/${fecha}`]);
  }
}