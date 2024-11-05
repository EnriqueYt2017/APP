import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DocentePageRoutingModule } from './docente-routing.module';
import { DocentePage } from './docente.page';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentePageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule 
  ],
  declarations: [DocentePage]
})
export class DocentePageModule {}