import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { JokesService } from '../../services/frases.service';

@Component({
  selector: 'app-alumno', 
  templateUrl: './alumno.page.html', 
  styleUrls: ['./alumno.page.scss'] 
})
export class AlumnoPage implements OnInit {  

  nombreUsuario: string = ''; 
  isMenuOpen: boolean = false; 
  joke: string = '';

  constructor(private navCtrl: NavController,private jokesService: JokesService) { }

  ngOnInit() {
  
    const nombre = localStorage.getItem('usuario');
    this.jokesService.getJoke().subscribe( (data) => { if (data.type === 'single')
       { this.joke = data.joke; } else { this.joke = `${data.setup} - ${data.delivery}`; } },
        (error) => { console.error('Error al obtener el chiste:', error); } 
      );
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

 
  logout() {
    localStorage.clear(); 
    this.navCtrl.navigateRoot(['/intro']);
  }

 
  curso(){
    this.navCtrl.navigateForward(['/cursos-a'])
  }

  escaner(){
    this.navCtrl.navigateForward(['/qr-a'])
  }

  asistencia(){
    this.navCtrl.navigateForward(['/asistencia'])
  }
}