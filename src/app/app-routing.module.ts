import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule),
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then(m => m.DocentePageModule)
  },
  {
    path: 'cursos-d/:id',
    loadChildren: () => import('./pages/cursos-d/cursos-d.module').then(m => m.CursosDPageModule)
  },
  {
    path: 'qr-d',
    loadChildren: () => import('./pages/qr-d/qr-d.module').then(m => m.QRDPageModule)
  },
  {
    path: 'informe-d/:id',
    loadChildren: () => import('./pages/informe-d/informe-d.module').then(m => m.InformeDPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then(m => m.AlumnoPageModule)
  },
  {
    path: 'cursos-a',
    loadChildren: () => import('./pages/cursos-a/cursos-a.module').then(m => m.CursosAPageModule)
  },
  {
    path: 'qr-a',
    loadChildren: () => import('./pages/qr-a/qr-a.module').then(m => m.QrAPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'recupera',
    loadChildren: () => import('./pages/recupera/recupera.module').then(m => m.RecuperaPageModule)
  },
  {
    path: 'repet',
    loadChildren: () => import('./pages/repet/repet.module').then(m => m.RepetPageModule)
  },
  {
    path: 'asistencia-clases',
    loadChildren: () => import('./pages/asistencia-clases/asistencia-clases.module').then(m => m.AsistenciaClasesPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then(m => m.AsistenciaPageModule)
  },
  {
    path: 'lista-cursos',
    loadChildren: () => import('./pages/lista-cursos/lista-cursos.module').then(m => m.ListaCursosPageModule)
  },
  {
    path: 'lista-informe',
    loadChildren: () => import('./pages/lista-informe/lista-informe.module').then(m => m.ListaInformePageModule)
  },
  {
    path: 'lista-cur',
    loadChildren: () => import('./pages/lista-cur/lista-cur.module').then(m => m.ListaCurPageModule)
  },
  {
    path: 'asistencias-detalle',
    loadChildren: () => import('./pages/asistencias-detalle/asistencias-detalle.module').then( m => m.AsistenciasDetallePageModule)
  },
  {
    path: 'detalle-estudiantes/:id',
    loadChildren: () => import('./pages/detalle-estudiantes/detalle-estudiantes.module').then( m => m.DetalleEstudiantesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./pages/clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }