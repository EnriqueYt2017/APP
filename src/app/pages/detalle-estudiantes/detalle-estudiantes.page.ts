import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaseService } from 'src/app/services/clase.service';

@Component({
  selector: 'app-detalle-estudiantes',
  templateUrl: './detalle-estudiantes.page.html',
  styleUrls: ['./detalle-estudiantes.page.scss'],
})
export class DetalleEstudiantesPage implements OnInit {
  claseId: string;

  clases: any[] = [];

  constructor(private route: ActivatedRoute, private claseService: ClaseService) {
    this.claseId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes() {
    this.claseService
      .obtenerAsistenciaPorClase(this.claseId)
      .subscribe((asistencia) => {
        console.log(asistencia);
        this.clases = asistencia;
      });
  }
}