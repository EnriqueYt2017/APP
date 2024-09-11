import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },

  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'cursos-d',
    loadChildren: () => import('./pages/cursos-d/cursos-d.module').then( m => m.CursosDPageModule)
  },
  {
    path: 'qr-d',
    loadChildren: () => import('./pages/qr-d/qr-d.module').then( m => m.QRDPageModule)
  },
  {
    path: 'informe-d',
    loadChildren: () => import('./pages/informe-d/informe-d.module').then( m => m.InformeDPageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'cursos-a',
    loadChildren: () => import('./pages/cursos-a/cursos-a.module').then( m => m.CursosAPageModule)
  },
  {
    path: 'qr-a',
    loadChildren: () => import('./pages/qr-a/qr-a.module').then( m => m.QrAPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: 'login-d',
    loadChildren: () => import('./pages/login-d/login-d.module').then( m => m.LoginDPageModule)
  },
  {
    path: 'login-a',
    loadChildren: () => import('./pages/login-a/login-a.module').then( m => m.LoginAPageModule)
  },
  {
    path: 'asistencia-clases',
    loadChildren: () => import('./pages/asistencia-clases/asistencia-clases.module').then( m => m.AsistenciaClasesPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./pages/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'repetir-password',
    loadChildren: () => import('./pages/repetir-password/repetir-password.module').then( m => m.RepetirPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
