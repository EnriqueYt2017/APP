import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavController } from '@ionic/angular';
import {ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
=======
>>>>>>> 67017e48c12275a17f3f33e3758fb8073023a0fd
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
 
})

export class NotfoundPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement>;

  private animation: Animation;
  constructor(private animationCtrl: AnimationController, private navCtrl:NavController) { }

  ngOnInit() {
    setTimeout(()=>{
      this.navCtrl.navigateForward(['/intro']) 
    },4000)
  
  }
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }



}