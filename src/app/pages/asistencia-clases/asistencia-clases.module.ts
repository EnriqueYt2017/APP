import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AsistenciaClasesPage } from './asistencia-clases.page';
import { AsistenciaClasesPageRoutingModule } from './asistencia-clases-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaClasesPageRoutingModule
  ],
  declarations: [AsistenciaClasesPage]
})
export class AsistenciaClasesPageModule {}