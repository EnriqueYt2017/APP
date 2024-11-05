import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleEstudiantesPage } from './detalle-estudiantes.page';

describe('DetalleEstudiantesPage', () => {
  let component: DetalleEstudiantesPage;
  let fixture: ComponentFixture<DetalleEstudiantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEstudiantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
