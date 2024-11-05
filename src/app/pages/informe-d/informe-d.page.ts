import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'; 
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ClaseService } from 'src/app/services/clase.service';
import { Estudiante } from 'src/app/models/estudiante.model';
import { FirebaseService } from 'src/app/services/firebase.service';

interface Clase {
  id: any;
  nombre: any;
  codigo: any;
  profesor: any;
  hora: any;
  [key: string]: any; // Permite el acceso mediante índices de tipo cadena
}

@Component({
  selector: 'app-informe-d',
  templateUrl: './informe-d.page.html',
  styleUrls: ['./informe-d.page.scss'],
})
export class InformeDPage implements OnInit {
  users: any[] = []; // Declara la propiedad users
  id: string | null;
  class: Clase[];
  estudiantes: Estudiante[] = [];

  constructor(
    private asistenciaService: AsistenciaService,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private clase: ClaseService,
    private fs: FirebaseService,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    /* this.apiService.getUsers().subscribe((response: any) => {
      this.users = response;
    }); */
    this.obtenerAsistencias();
  }

  obtenerAsistencias() {
    if (!this.id) return;
    this.clase
      .obtenerAsistenciaPorClase(this.id)
      .subscribe((asistencia) => {
        this.class = asistencia;
        this.fs.getUsers().subscribe((estudiantes) => {
          this.estudiantes = estudiantes.map((estudiante) => {
            const asistencias = this.class.filter((clase: any) => clase.estudiantes.some((e: any) => e.id === estudiante.id && e.presente == true)).length;
            return {
              ...estudiante,
              asistencia: asistencias > 0 ? ((asistencias / this.class.length) * 100) : 0 + '%'
            };
          });
        });
      });
  }

  eliminarEstudiante(indice: number) {
    this.estudiantes.splice(indice, 1);
  }

  async generarInformePDF() {
    const doc = new jsPDF();
    const title = 'Informe de Estudiantes' ;
    const headers = [['Nombre','Apellido', 'Porcentaje']];
    const data = this.estudiantes.map(estudiante => [estudiante.nombre,  estudiante.apellido || '', estudiante.asistencia || '']);
    doc.setFontSize(18);
    doc.text(title, 14, 20);
    doc.setFontSize(12);
    autoTable(doc, {
      head: headers,
      body: data,
      startY: 30,
    });
    doc.save('Informe Asistencia' + '.PDF');
  }

  async generarXLSX(): Promise<void>  {
    const datos = [
      ['Nombre','Apellido', 'Asistencia(%)'],
      ...this.estudiantes.map((estudiante) => [estudiante.nombre, estudiante.apellido, estudiante.asistencia]),
    ];
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(datos);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');
    XLSX.writeFile(wb, 'Informe Asistencia' + '.xlsx');
  }
}
